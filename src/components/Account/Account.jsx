import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Buttons, ButtonsContainer } from "../MainHome/MainHome.style";
import AccountForm from "./AccountForm";

import { removeAllChoice, addAllChoice } from "../../global/choice/actions";
import { ChoiceContext } from "../../global/choice/context";
import {
  ContactButton,
  ContactContainer,
  ContactText,
  ErrorP,
} from "./Account.style";

const Account = () => {
  const navigate = useNavigate();

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);
  const [isFound, setIsFound] = useState([]);

  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);

  const { localData, handleLocalData, resetLocalData } =
    useLocalStorage("user");

  console.log("localData", localData, stateGlobalChoice);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const userData = await response.json();
        console.log("userData", userData);
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        setError("Eroare 808");
        setLoading(false);
      }
    };

    fetchData();
  }, [inputObj]);

  console.log("users", users, "loading", loading, "error", error);

  const [errorInput, setErrorInput] = useState({
    Email: undefined,
  });

  const [isValid, setIsValid] = useState(true);

  const handleChange = (e, name) => {
    setError(false);
    const value = e.target.value;
    setInputObj({ ...inputObj, [name]: value });
    handleError(value, name);

    const foundUser = users.find((element) => element.Email === value);

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
    resetLocalData();
    const id = await handleSubmit();
    handleLocalData("user", JSON.stringify(id));
    console.log("S-a adagat un user cu acest id in local storage", id);
    navigate(`/users/${id}`);
  };

  const getUserData = () => {
    const userData = users.find((element) => element.Email === inputObj.Email);
    console.log("users", users);
    console.log("inputObj", inputObj);
    console.log("userData", userData);

    handleLocalData("user", JSON.stringify(userData.id));

    dispatchChoice(removeAllChoice());

    if (userData) {
      dispatchChoice(addAllChoice(userData.choices));
    }

    if (userData.choices) {
      // const { country, city, region, buget, period, data } = userData.choices;
      // dispatchChoice(addChoice({ country, city, region, buget, period, data }));
      console.log("userData.choices", userData.choices);
      console.log(
        "stateGlobalChoice.choiceValue",
        stateGlobalChoice.choiceValue
      );
      console.log("stateGlobalChoice", stateGlobalChoice);
    } else {
      setError("No selected travel choices yet!");
    }
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
    <>
      <ButtonsContainer loc="ButtonsContainer">
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
      </ButtonsContainer>
      {isVisible1 && (
        <ContactContainer>
          <ContactText>Enter e-mail to login</ContactText>
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
              onClick={() => {
                getUserData();
              }}
            >
              Login
            </ContactButton>
          )}
          {isValid && isFound && error && (
            <>
              <ErrorP>{error}</ErrorP>
              <ContactButton to={`/home`}>Take me view offers!</ContactButton>
            </>
          )}
          {!isValid && <ErrorP>Not valid</ErrorP>}
          {!isFound && isVisible1 && <ErrorP>No such user found</ErrorP>}
        </ContactContainer>
      )}
      {isVisible2 && (
        <ContactContainer>
          <ContactText>Enter e-mail to create account</ContactText>
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
              onClick={() => {
                addNewId();
              }}
            >
              Create account
            </ContactButton>
          )}
          {!isValid && <ErrorP>Not valid</ErrorP>}
          {isFound && isVisible2 && <ErrorP>Email already exists</ErrorP>}
        </ContactContainer>
      )}
    </>
  );
};

export default Account;
