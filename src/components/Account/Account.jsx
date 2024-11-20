import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../global/user/UserContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Buttons } from "../MainHome/MainHome.style";
import AccountForm from "./AccountForm";

import { addAllChoice, removeAllChoice } from "../../global/choice/actions";
import { ChoiceContext } from "../../global/choice/context";
import {
  addAllItinerary,
  addAllItineraryLandmark,
  removeAllItinerary,
} from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import useFetchUsers from "../../hooks/useFetchUsers";
import { Error } from "../Contact/Contact.style";
import { InfoUser } from "../Explore/Explore.style";
import {
  AccountSection,
  ButtonsContainerAccount,
  AccountActionButton,
  ContactContainer,
  ContactText,
  InputContainerAccount,
} from "./Account.style";

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
  const [splitContainer, setSplitContainer] = useState(false);

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
    setSplitContainer(!splitContainer);
    setIsVisible2(false);
    setError(false);
    setIsFound(true);
    setInputObj({ Email: "" }); //reset input field
  };

  const handleNewAccount = () => {
    setIsVisible2(!isVisible2);
    setSplitContainer(!splitContainer);
    setIsVisible1(false);
    setError(false);
    setIsFound(false);
    setInputObj({ Email: "" }); //reset input field
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
    setIsVisible1(false); //closes login form
    setIsVisible2(false); //closes new account form
    setSplitContainer(false);
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
      <ButtonsContainerAccount
        loc="ButtonsContainerAccount"
        split={splitContainer ? "true" : "false"}
      >
        <Buttons
          loc="Buttons"
          variant="account" //prop for css
          onClick={() => handleGetAccount()}
        >
          Login
        </Buttons>
        <Buttons
          loc="Buttons"
          variant="account" //prop for css
          onClick={() => handleNewAccount()}
        >
          Create new account
        </Buttons>
        <Buttons
          loc="Buttons"
          variant="account" //prop for css
          onClick={() => logoutUser()}
        >
          Logout
        </Buttons>
      </ButtonsContainerAccount>
      <InputContainerAccount
        loc="InputContainerAccount"
        split={splitContainer ? "true" : "false"}
      >
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
              <AccountActionButton
                loc="AccountActionButton"
                onClick={() => {
                  getUserData();
                }}
              >
                Login
              </AccountActionButton>
            )}
            {isValid && isFound && message && (
              <>
                <InfoUser loc="InfoUser">{message}</InfoUser>
                <AccountActionButton loc="AccountActionButton" to={`/home`}>
                  Take me to view offers!
                </AccountActionButton>
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
              <AccountActionButton
                loc="AccountActionButton"
                onClick={() => {
                  addNewId();
                }}
              >
                Create account
              </AccountActionButton>
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
