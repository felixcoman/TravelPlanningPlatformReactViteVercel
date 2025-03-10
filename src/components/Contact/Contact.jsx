import { useState } from "react";
import { useToast } from "../../global/toast/ToastContext";
import ToastComponent from "../Toast/ToastComponent";
import {
  ContactButton,
  ContactContainer,
  ContactText,
  Error,
} from "./Contact.style";
import ContactForm from "./ContactForm";
import ContactFormTextarea from "./ContactFormTextarea";

const Contact = () => {
  const [data, setData] = useState(null);

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

  const { showToast } = useToast();

  const handleChange = (e, name) => {
    setInputObj({ ...inputObj, [name]: e.target.value.trim() });
    handleError(e.target.value.trim(), name);
  };

  const checkCompulsory = () => {
    console.log("inputObj", inputObj);

    if (
      (inputObj.Name === "" && inputObj.Surname === "") ||
      (inputObj.Mobile === "" && inputObj.Email === "") ||
      inputObj.Textarea === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = () => {
    console.log("checkCompulsory", checkCompulsory());
    setData(null);
    if (checkCompulsory()) {
      //it is to early to give a success message because we do not have a response from the post in the postSubmit function
      showToast(
        "Feedback",
        "Your feedback was posted successfully!",
        "my-info-toast"
      );
      postSubmit();
    } else {
      showToast(
        "Feedback Error",
        "Please complete compulsory fields!",
        "my-warning-toast"
      );
    }
  };

  const postSubmit = async () => {
    //In this function I have to handle the case when there is an error at posting
    try {
      const add = await fetch(`/api/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputObj),
      });

      if (!add.ok) {
        throw new Error("Network response was not ok!");
      }

      const response = await add.json();
      setData(response);
      console.log("Response from sever:", response);
      return response.id;
    } catch (error) {
      console.error("Error posting feedback:", error);
      return null;
    }
  };

  const handleError = (value, name) => {
    console.log("inside handleError");

    switch (name) {
      case "Name":
        if (value === "") {
          setErrorInput({ ...errorInput, [name]: undefined });
          setIsValid(true);
        } else if (value.length < 3) {
          setErrorInput({
            ...errorInput,
            [name]: "The name is too short!",
          });
          setIsValid(false);
        } else if (value === "Name" || value === "Surname") {
          setErrorInput({
            ...errorInput,
            [name]: "Error, please enter a valid name!",
          });
          setIsValid(false);
        } else {
          setErrorInput({ ...errorInput, [name]: undefined });
          setIsValid(true);
        }
        break;
      case "Surname":
        if (value === "") {
          setErrorInput({ ...errorInput, [name]: undefined });
          setIsValid(true);
        } else if (value.length < 3) {
          setErrorInput({
            ...errorInput,
            [name]: "The name is too short!",
          });
          setIsValid(false);
        } else if (value === "Surname" || value === "Name") {
          setErrorInput({
            ...errorInput,
            [name]: "Error, please enter a valid surname!",
          });
          setIsValid(false);
        } else {
          setErrorInput({ ...errorInput, [name]: undefined });
          setIsValid(true);
        }
        break;
      case "Mobile":
        let valueArr = value.split(" ");

        valueArr.map((e) => {
          if (e === "") {
            setErrorInput({ ...errorInput, [name]: undefined });
            setIsValid(true);
          } else if (!e.match("[0-9]{10}") || e[0] != "0" || e[1] != "7") {
            setErrorInput({
              ...errorInput,
              [name]: "Please enter a 10 digit number that starts with 07.",
            });
            setIsValid(false);
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

        if (value === "") {
          setErrorInput({ ...errorInput, [name]: undefined });
          setIsValid(true);
        } else if (!isEmailValid(value)) {
          setErrorInput({
            ...errorInput,
            [name]: "Invalid email format!",
          });
          setIsValid(false);
        } else {
          setErrorInput({ ...errorInput, [name]: undefined });
          setIsValid(true);
        }
        break;
      case "Textarea":
        if (value.length < 8 && value.length !== 0) {
          setErrorInput({
            ...errorInput,
            [name]: "Error, text too short, please be more specific!",
          });
          setIsValid(false);
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

      {isValid && (
        <ContactButton
          loc="ContactButton"
          onClick={() => {
            handleSubmit();
          }}
        >
          Send Feedback
        </ContactButton>
      )}
      {!isValid && <Error>Not valid</Error>}
      <ToastComponent />
    </ContactContainer>
  );
};

export default Contact;
