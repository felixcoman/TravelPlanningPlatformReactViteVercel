import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactFormTextarea from "./ContactFormTextarea";
import { ContactContainer, ContactButton, ContactText } from "./Contact.style";

const Contact = () => {
  const [inputObj, setInputObj] = useState({
    Name: "",
    SurName: "",
    Mobile: "",
    Email: "",
    Textarea: "",
  });

  const [error, setError] = useState({
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

  const handleSubmit = () => {
    console.log(inputObj);
    fetch(`http://localhost:3001/users`, {
      method: "POST",
      body: JSON.stringify(inputObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleError = (value, name) => {
    switch (name) {
      case "Name":
        if (!value.trim() || value.length < 3) {
          setError({
            ...error,
            [name]: "This field is required.",
          });
          setIsValid(false);
          console.log(isValid);
        } else if (value === "Name") {
          setError({ ...error, [name]: "Error" });
          setIsValid(false);
        } else {
          setError({ ...error, [name]: undefined });
          setIsValid(true);
          console.log(isValid);
        }
        break;
      case "SurName":
        if (!value.trim() || value.length < 3) {
          setError({
            ...error,
            [name]: "This field is required.",
          });
          setIsValid(false);
        } else if (value === "SurName") {
          setError({ ...error, [name]: "Error" });
        } else {
          setError({ ...error, [name]: undefined });
          setIsValid(true);
        }
        break;
      case "Mobile":
        let valueArr = value.split(" ");
        valueArr.filter((e) => {
          if (!value.match("[0-9]{10}") || e[0] != "0" || e[1] != "7") {
            setError({
              ...error,
              [name]: "Please enter a 10 digit number that starts with 07.",
            });
            setIsValid(false);
          } else if (value === "Mobile") {
            setError({ ...error, [name]: "Error" });
          } else {
            setError({ ...error, [name]: undefined });
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
          setError({
            ...error,
            [name]: "Invalid email format.",
          });
          setIsValid(false);
        } else if (value === "Email") {
          setError({ ...error, [name]: "Error" });
        } else {
          setError({ ...error, [name]: undefined });
          setIsValid(true);
        }
        break;
      case "Textarea":
        if (!value.trim()) {
          setError({
            ...error,
            [name]: "This field is required.",
          });
          setIsValid(false);
        } else if (value === "Textarea") {
          setError({ ...error, [name]: "Error" });
        } else {
          setError({ ...error, [name]: undefined });
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
            error={error[el]}
          />
        ) : (
          <ContactForm
            key={index}
            name={el}
            type={el}
            value={inputObj[el]}
            handleChange={handleChange}
            error={error[el]}
          />
        )
      )}

      {isValid === true && (
        <ContactButton
          loc="ContactButton"
          onClick={() => {
            handleSubmit();
          }}
        >
          Send Feedback
        </ContactButton>
      )}
      {isValid === false && <p>Not valid</p>}
    </ContactContainer>
  );
};

export default Contact;
