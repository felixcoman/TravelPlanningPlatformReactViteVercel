import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactFormTextarea from "./ContactFormTextarea";
import { ContactContainer, ContactButton, ContactText } from "./Contact.style";

const inputs = [
  {
    name: "Name",
    type: "text",
  },
  {
    name: "SurName",
    type: "text",
  },
  {
    name: "Mobile",
    type: "number",
  },
  {
    name: "Email",
    type: "text",
  },
  {
    name: "Textarea",
    type: "text",
  },
];

const textarea = [
  {
    name: "Textarea",
    type: "text",
  },
];

const Contact = () => {
  const [inputObj, setInputObj] = useState({
    Name: "",
    SurName: "",
    Mobile: "",
    Email: "",
    Textarea: "",
  });
  const [textareaObj, setTextareaObj] = useState({
    Textarea: "",
  });

  const [error, setError] = useState({
    Name: undefined,
    Surname: undefined,
    Mobile: undefined,
    Email: undefined,
    Textarea: undefined,
  });

  const handleChange = (e, name) => {
    setInputObj({ ...inputObj, [name]: e.target.value });
    handleError(e.target.value, name);
  };
  const handleChangeTextarea = (e, name) => {
    setTextareaObj({ ...textareaObj, [name]: e.target.value });
    handleError(e.target.value, name);
  };

  const handleSubmit = () => {
    console.log(inputObj, textareaObj);
    fetch(`http://localhost:3001/users`, {
      method: "POST",
      body: JSON.stringify(inputObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleSubmitTextarea = () => {
    fetch(`http://localhost:3001/users`, {
      method: "POST",
      body: JSON.stringify(textareaObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const handleError = (value, name) => {
    switch (name) {
      case "Name":
        if (!value.trim()) {
          setError({
            ...error,
            [name]: "This field is required.",
          });
        } else if (value === "Name") {
          setError({ ...error, [name]: "Error" });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "SurName":
        if (!value.trim()) {
          setError({
            ...error,
            [name]: "This field is required.",
          });
        } else if (value === "SurName") {
          setError({ ...error, [name]: "Error" });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "Mobile":
        if (!value.match("[0-9]{10}")) {
          setError({
            ...error,
            [name]: "Please enter 10 digit",
          });
        } else if (value === "Mobile") {
          setError({ ...error, [name]: "Error" });
        } else {
          setError({ ...error, [name]: undefined });
        }
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
        } else if (value === "Email") {
          setError({ ...error, [name]: "Error" });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "Textarea":
        if (!value.trim()) {
          setError({
            ...error,
            [name]: "This field is required.",
          });
        } else if (value === "Textarea") {
          setError({ ...error, [name]: "Error" });
        } else {
          setError({ ...error, [name]: undefined });
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
      {Object.keys(inputObj).map((el, index) => (
        <ContactForm
          key={index}
          name={el}
          type={el}
          value={inputObj[el]}
          handleChange={handleChange}
          error={error[el]}
        />
      ))}
      {Object.keys(textareaObj).map((el, index) => (
        <ContactFormTextarea
          key={index}
          name={el}
          type={el}
          value={textareaObj[el]}
          handleChangeTextarea={handleChangeTextarea}
          error={error[el]}
        />
      ))}

      <ContactButton
        loc="ContactButton"
        onClick={() => {
          handleSubmit();
          handleSubmitTextarea();
        }}
      >
        Send Feedback
      </ContactButton>
    </ContactContainer>
  );
};

export default Contact;
