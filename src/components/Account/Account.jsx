import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import AccountForm from "./AccountForm";

import {
  ContactButton,
  ContactContainer,
  ContactText,
  ErrorP,
} from "./Account.style";

const Account = () => {
  const navigate = useNavigate();

  const [inputObj, setInputObj] = useState({
    Email: "",
  });

  const [errorInput, setErrorInput] = useState({
    Email: undefined,
  });

  const [isValid, setIsValid] = useState(true);

  const handleChange = (e, name) => {
    setInputObj({ ...inputObj, [name]: e.target.value });
    handleError(e.target.value, name);
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

  const { localData, handleLocalData, resetLocalData } =
    useLocalStorage("user");

  console.log("localData", localData);

  const addNewId = async () => {
    resetLocalData();
    const id = await handleSubmit();
    handleLocalData("user", JSON.stringify(id));
    console.log("S-a adagat un user cu acest id in local storage", id);
    navigate(`/users/${id}`);
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

      {isValid && (
        <ContactButton
          onClick={() => {
            addNewId();
          }}
        >
          Create account
        </ContactButton>
      )}
      {!isValid && <ErrorP>Not valid</ErrorP>}
    </ContactContainer>
  );
};

export default Account;
