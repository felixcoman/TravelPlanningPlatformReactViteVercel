import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactFormTextarea from "./ContactFormTextarea";
import {
  ContactContainer,
  ContactButton,
  ContactText,
  Error,
} from "./Contact.style";

const Contact = () => {
  const [inputObj, setInputObj] = useState({
    Name: "",
    Surname: "",
    Mobile: "",
    Email: "",
    Textarea: "",
  });

  const [errorInput, setErrorInput] = useState({
    Name: undefined,
    Surname: undefined,
    Mobile: undefined,
    Email: undefined,
    Textarea: undefined,
  });

  const [isValid, setIsValid] = useState(true);

  const handleChange = (e, name) => {
    setInputObj({ ...inputObj, [name]: e.target.value });
    handleError(e.target.value, name);
  };

  const handleSubmit = async () => {
    console.log(inputObj);
    const add = await fetch(`http://localhost:3001/feedback`, {
      method: "POST",
      body: JSON.stringify(inputObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await add.json();
    return response[0].id;
  };

  const handleError = (value, name) => {
    switch (name) {
      case "Name":
        if (!value.trim() || value.length < 3) {
          setErrorInput({
            ...errorInput,
            [name]: "This field is required.",
          });
          setIsValid(false);
          console.log(isValid);
        } else if (value === "Name") {
          setErrorInput({ ...errorInput, [name]: "Error" });
          setIsValid(false);
        } else {
          setErrorInput({ ...errorInput, [name]: undefined });
          setIsValid(true);
        }
        break;
      case "Surname":
        if (!value.trim() || value.length < 3) {
          setErrorInput({
            ...errorInput,
            [name]: "This field is required.",
          });
          setIsValid(false);
        } else if (value === "Surname") {
          setErrorInput({ ...errorInput, [name]: "Error" });
        } else {
          setErrorInput({ ...errorInput, [name]: undefined });
          setIsValid(true);
        }
        break;
      case "Mobile":
        let valueArr = value.split(" ");
        valueArr.filter((e) => {
          if (!value.match("[0-9]{10}") || e[0] != "0" || e[1] != "7") {
            setErrorInput({
              ...errorInput,
              [name]: "Please enter a 10 digit number that starts with 07.",
            });
            setIsValid(false);
          } else if (value === "Mobile") {
            setErrorInput({ ...errorInput, [name]: "Error" });
          } else {
            setErrorInput({ ...errorInput, [name]: undefined });
            setIsValid(true);
          }
        });
        break;
      case "Email":
        const isEmailValid = (email) => {
          const formulaEmail =
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
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
        break;
      case "Textarea":
        if (!value.trim()) {
          setErrorInput({
            ...errorInput,
            [name]: "This field is required.",
          });
          setIsValid(false);
        } else if (value === "Textarea") {
          setErrorInput({ ...errorInput, [name]: "Error" });
        } else {
          setErrorInput({ ...errorInput, [name]: undefined });
          setIsValid(true);
        }
        break;
      default:
        break;
    }
  };

  return (
    <ContactContainer loc="ContactContainer">
      <ContactText loc="ContactText">
        We will apreciate your feedback:
      </ContactText>
      {Object.keys(inputObj).map((el, index) =>
        el === "Textarea" ? (
          <ContactFormTextarea
            key={index}
            name={el}
            type={el}
            value={inputObj[el]}
            handleChange={handleChange}
            error={errorInput[el]}
          />
        ) : (
          <ContactForm
            key={index}
            name={el}
            type={el}
            value={inputObj[el]}
            handleChange={handleChange}
            error={errorInput[el]}
          />
        )
      )}

      {isValid === true && (
        <ContactButton
          loc="ContactButton"
          //to={`/users/${id}`}
          onClick={() => {
            handleSubmit();
          }}
        >
          Send Feedback
        </ContactButton>
      )}
      {isValid === false && <Error>Not valid</Error>}
    </ContactContainer>
  );
};

export default Contact;
