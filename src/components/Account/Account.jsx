import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../global/user/UserContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Buttons } from "../MainHome/MainHome.style";
import AccountForm from "./AccountForm";

import { addAllChoice, removeAllChoice } from "../../global/choice/actions";
import { ChoiceContext } from "../../global/choice/context";
import {
  removeAllItinerary,
  addAllItinerary,
  addAllItineraryLandmark,
} from "../../global/itinerary/actions";
import useFetchUsers from "../../hooks/useFetchUsers";
import {
  ButtonsContainerAccount,
  ContactButton,
  ContactContainer,
  ContactText,
  InputContainerAccount,
  AccountSection,
} from "./Account.style";
import { ItineraryContext } from "../../global/itinerary/context";
import { InfoUser } from "../Explore/Explore.style";
import { Error } from "../Contact/Contact.style";

const Account = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  let id = "";

  const { user, setUser, fetchUser } = useContext(UserContext); // destructurare UserContext

  const { users, error, loading, setError } = useFetchUsers(
    id,
    clicked,
    setClicked
  );

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);

  const [message, setMessage] = useState(false);

  const [isFound, setIsFound] = useState([]);
  const [errorInput, setErrorInput] = useState({
    Email: undefined,
  });
  const [isValid, setIsValid] = useState(true);

  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);
  const { stateGlobalItinerary, dispatchItinerary } =
    useContext(ItineraryContext);

  const { localData, handleLocalData, resetLocalData } =
    useLocalStorage("user");

  console.log(
    "localData",
    localData,
    "stateGlobalChoice",
    stateGlobalChoice,
    "stateGlobalItinerary",
    stateGlobalItinerary
  );

  console.log("users", users, "loading", loading, "error", error);

  const handleGetAccount = () => {
    setIsVisible1(!isVisible1);
    setIsVisible2(false);
    setError(false);
    setIsFound(true);
    !isVisible1 ? buttonRef1.current.focus() : buttonRef1.current.blur();
  };

  const handleNewAccount = () => {
    setIsVisible2(!isVisible2);
    setIsVisible1(false);
    setError(false);
    setIsFound(false);
    !isVisible2 ? buttonRef2.current.focus() : buttonRef2.current.blur();
  };

  const [inputObj, setInputObj] = useState({
    Email: "",
  });

  const handleChange = (e, name) => {
    setError(false);
    setClicked(true);
    const value = e.target.value;
    setInputObj({ ...inputObj, [name]: value });
    handleError(value, name);

    const foundUser = users?.find((element) => element.Email === value);

    if (users && users.length > 0) {
      setIsFound(foundUser !== undefined);
    } else {
      setIsFound(false);
    }
  };

  const handleSubmit = async () => {
    console.log(inputObj);
    const add = await fetch(`http://localhost:3001/users`, {
      method: "POST",
      body: JSON.stringify(inputObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await add.json();
    console.log("S-a adaugat un user cu acest id pe server", response[0].id);

    return response[0].id;
  };

  const addNewId = async () => {
    dispatchChoice(removeAllChoice());
    dispatchItinerary(removeAllItinerary());
    const idul = await handleSubmit();
    handleLocalData("user", JSON.stringify(idul));
    console.log("S-a adagat un user cu acest id in local storage", idul);
    setUser({ Email: inputObj.Email, idul });
    navigate(`/users/${idul}`);
  };

  const getUserData = () => {
    setClicked(true);
    const userData = users?.find((element) => element.Email === inputObj.Email);
    console.log("users", users);
    console.log("inputObj", inputObj);
    console.log("userData", userData);

    handleLocalData("user", JSON.stringify(userData.id));
    setUser(userData);

    if (userData.choices) {
      dispatchChoice(addAllChoice(userData.choices));
    }

    if (userData.itinerarycity) {
      dispatchItinerary(addAllItinerary(userData.itinerarycity));
      console.log("userData.itinerarycity", userData.itinerarycity);
    }

    if (userData.itinerarylandmark) {
      dispatchItinerary(addAllItineraryLandmark(userData.itinerarylandmark));
      console.log("userData.itinerarylandmark", userData.itinerarylandmark);
    }
  };

  const logoutUser = () => {
    setIsVisible1(false);
    resetLocalData();
    setUser(null);
    dispatchChoice(removeAllChoice());
    dispatchItinerary(removeAllItinerary());
  };

  const handleError = (value, name) => {
    const isEmailValid = (email) => {
      const formulaEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return formulaEmail.test(email);
    };

    if (!isEmailValid(value)) {
      setErrorInput({
        ...errorInput,
        [name]: "Invalid email format.",
      });
      setIsValid(false);
    } else if (value === "Email") {
      setErrorInput({ ...errorInput, [name]: "Error" });
    } else {
      setErrorInput({ ...errorInput, [name]: undefined });
      setIsValid(true);
    }
  };

  return (
    <AccountSection loc="AccountSection">
      <ButtonsContainerAccount loc="ButtonsContainerAccount">
        <Buttons
          loc="Buttons"
          ref={buttonRef1}
          onClick={() => handleGetAccount()}
        >
          Login
        </Buttons>
        <Buttons
          loc="Buttons"
          ref={buttonRef2}
          onClick={() => handleNewAccount()}
        >
          Create new account
        </Buttons>
        <Buttons loc="Buttons" onClick={() => logoutUser()}>
          Logout
        </Buttons>
      </ButtonsContainerAccount>
      <InputContainerAccount loc="InputContainerAccount">
        {isVisible1 && (
          <ContactContainer loc="ContactContainer">
            <ContactText loc="ContactText">Enter e-mail to login</ContactText>
            {Object.keys(inputObj).map((el, index) => (
              <AccountForm
                key={index}
                name={el}
                type={el}
                value={inputObj[el]}
                handleChange={handleChange}
                error={errorInput[el]}
              />
            ))}
            {isValid && isFound && (
              <ContactButton
                loc="ContactButton"
                onClick={() => {
                  getUserData();
                }}
              >
                Login
              </ContactButton>
            )}
            {isValid && isFound && message && (
              <>
                <InfoUser loc="InfoUser">{message}</InfoUser>
                <ContactButton loc="ContactButton" to={`/home`}>
                  Take me to view offers!
                </ContactButton>
              </>
            )}
            {!isValid && <Error loc="Error">Not valid</Error>}
            {!isFound && isVisible1 && (
              <Error loc="Error">No such user found</Error>
            )}
          </ContactContainer>
        )}
        {isVisible2 && (
          <ContactContainer loc="ContactContainer">
            <ContactText loc="ContactText">
              Enter e-mail to create account
            </ContactText>
            {Object.keys(inputObj).map((el, index) => (
              <AccountForm
                key={index}
                name={el}
                type={el}
                value={inputObj[el]}
                handleChange={handleChange}
                error={errorInput[el]}
              />
            ))}
            {isValid && !isFound && (
              <ContactButton
                loc="ContactButton"
                onClick={() => {
                  addNewId();
                }}
              >
                Create account
              </ContactButton>
            )}
            {!isValid && <Error loc="Error">Not valid</Error>}
            {isFound && isVisible2 && (
              <Error loc="Error">Email already exists</Error>
            )}
          </ContactContainer>
        )}
      </InputContainerAccount>
    </AccountSection>
  );
};

export default Account;
