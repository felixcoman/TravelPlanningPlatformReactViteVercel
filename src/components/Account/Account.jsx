import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { addAllChoice, removeAllChoice } from "../../global/choice/actions";
import { ChoiceContext } from "../../global/choice/context";
import {
  addAllItinerary,
  addAllItineraryLandmark,
  removeAllItinerary,
} from "../../global/itinerary/actions";
import { ItineraryContext } from "../../global/itinerary/context";
import { useToast } from "../../global/toast/ToastContext";
import { UserContext } from "../../global/user/UserContext";
import useFetchUsers from "../../hooks/useFetchUsers";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Error } from "../Contact/Contact.style";
import { InfoUser } from "../Explore/Explore.style";
import { Buttons } from "../MainHome/MainHome.style";
import ToastComponent from "../Toast/ToastComponent";
import {
  AccountActionButton,
  AccountContainer,
  AccountSection,
  AccountText,
  ButtonsContainerAccount,
  InputContainerAccount,
} from "./Account.style";
import AccountForm from "./AccountForm";

const Account = () => {
  const { localData, handleLocalData, resetLocalData } =
    useLocalStorage("user");

  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const { user, setUser } = useContext(UserContext); // destructurare UserContext

  const { users, loading } = useFetchUsers(localData, clicked, setClicked);

  const usersArr = users?.users;

  console.log("users", users, "usersArr", usersArr, "loading", loading);

  const [inputObj, setInputObj] = useState({
    Email: "",
  });

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [splitContainer, setSplitContainer] = useState(false);
  const [message, setMessage] = useState("");
  const [isFound, setIsFound] = useState([]);
  const [errorInput, setErrorInput] = useState({
    Email: undefined,
  });
  const [isValid, setIsValid] = useState(true);

  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);
  const { stateGlobalItinerary, dispatchItinerary } =
    useContext(ItineraryContext);

  console.log(
    "localData",
    localData,
    "stateGlobalChoice",
    stateGlobalChoice,
    "stateGlobalItinerary",
    stateGlobalItinerary
  );

  const { showToast } = useToast();
  const [show, setShow] = useState(false);

  //check for users just if userArr exists and loading is ended (false); not check if there is no set input object
  useEffect(() => {
    if (!loading && usersArr && inputObj.Email !== "") {
      const foundUser = usersArr.find(
        (element) => element.Email === inputObj.Email
      );
      setIsFound(foundUser);
    }
  }, [usersArr, inputObj.Email, loading]);

  //enters LOGIN section
  const handleGetAccount = () => {
    console.log("inside handleGetAccount");

    setIsVisible1(!isVisible1);
    setSplitContainer(!splitContainer);
    setIsVisible2(false);

    //unset errors "Not valid!" and "Invalid email format!" and "No such user found!" when switching from login to create account or vice versa
    setErrorInput({
      Email: undefined,
    });
    setIsValid(true);
    setIsFound(true);
    //

    setMessage("");
    setInputObj({ Email: "" }); //reset input field
  };

  //enters CREATE ACCOUNT section
  const handleNewAccount = () => {
    setIsVisible2(!isVisible2);
    setSplitContainer(!splitContainer);
    setIsVisible1(false);

    //unset errors "Not valid!", "Invalid email format!" and "Email already exists!" when switching from login to create account or vice versa
    setErrorInput({
      Email: undefined,
    });
    setIsValid(true);
    setIsFound(false);
    //

    setInputObj({ Email: "" }); //reset input field
  };

  //Executes every time inputfield changes
  const handleChange = (e, name) => {
    console.log("inside handleChange");
    const value = e.target.value;
    console.log("value", value);

    //handleError sets isValid
    handleError(value, name);
    console.log("isValid", isValid);
    console.log("usersArr", usersArr);

    if (isValid) {
      setInputObj({ ...inputObj, [name]: value });
      setClicked(true);
    }
  };

  const handleSubmit = async () => {
    console.log("New input object", inputObj);
    const add = await fetch(`/api/users`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputObj),
    });
    const response = await add.json();
    console.log("What happend:", response);
    console.log(
      "A new user with this ID was added to the server",
      response.responseID
    );
    return [response.responseID, response];
  };

  //function for create new account now action button
  const addNewId = async () => {
    if (!inputObj.Email) {
      showToast(
        "New Account",
        "Please enter a valid e-mail!",
        "my-warning-toast"
      );
    } else {
      dispatchChoice(removeAllChoice());
      dispatchItinerary(removeAllItinerary());
      const [idLocal, resp] = await handleSubmit();
      handleLocalData("user", JSON.stringify(idLocal));
      console.log("S-a adagat un user cu acest id in local storage", idLocal);
      setUser({ Email: inputObj.Email, idLocal });
      if (idLocal) {
        setShow(true);
      } else showToast("New Account", `${resp.message}`, "my-warning-toast");
    }
  };

  //function for login action button
  const getUserData = () => {
    if (!inputObj.Email) {
      showToast("Login", "Please enter a valid e-mail!", "my-warning-toast");
    } else {
      console.log("localData", localData);
      setClicked(true);
      const userData = usersArr?.find(
        (element) => element.Email === inputObj.Email
      );
      console.log("users", usersArr);
      console.log("inputObj", inputObj);
      console.log("userData", userData);

      handleLocalData("user", JSON.stringify(userData.id));
      setUser(userData);

      if (userData.choices) {
        dispatchChoice(addAllChoice(userData.choices));
        console.log("userData.choices", userData.choices);
      }

      if (userData.itinerarycity) {
        dispatchItinerary(addAllItinerary(userData.itinerarycity));
        console.log("userData.itinerarycity", userData.itinerarycity);
      }

      if (userData.itinerarylandmark) {
        dispatchItinerary(addAllItineraryLandmark(userData.itinerarylandmark));
        console.log("userData.itinerarylandmark", userData.itinerarylandmark);
      }

      if (
        !userData.choices &&
        !userData.itinerarycity &&
        !userData.itinerarylandmark
      ) {
        setMessage("No travel options yet!");
        setSplitContainer(false);
      }
    }
  };

  //direct logout user
  const logoutUser = () => {
    setIsVisible1(false); //closes login form
    setIsVisible2(false); //closes new account form
    setSplitContainer(false);
    console.log("user", user);
    console.log("user.Email", user.Email);
    showToast("Logout", `Logout success, ${user.Email} !`, "my-info-toast");
    resetLocalData();
    setUser(null);
    dispatchChoice(removeAllChoice());
    dispatchItinerary(removeAllItinerary());
  };

  const handleError = (value, name) => {
    console.log("checking if valid");

    const isEmailValid = (email) => {
      const formulaEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return formulaEmail.test(email);
    };

    if (!isEmailValid(value)) {
      setErrorInput({
        ...errorInput,
        [name]: "Invalid email format!",
      });
      setIsValid(false);
    } else if (value === "Email") {
      setErrorInput({ ...errorInput, [name]: "Error" });
      setIsValid(false);
    } else {
      setErrorInput({ ...errorInput, [name]: undefined });
      setIsValid(true);
    }
  };

  const handleCloseShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Modal show={show} onHide={handleCloseShow}>
        <Modal.Header closeButton>
          <Modal.Title>New user</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{`A new user with this id ${localData} has been added!`}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => navigate(`/users/${localData}`)}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
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
            Create account
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
            <AccountContainer loc="AccountContainer">
              <AccountText loc="AccountText">Enter e-mail to login</AccountText>
              <AccountForm
                name="Email"
                type="Email"
                value={inputObj["Email"]}
                handleChange={handleChange}
                error={errorInput["Email"]}
              />

              {isValid && isFound && (
                <AccountActionButton
                  loc="AccountActionButton"
                  onClick={() => {
                    getUserData();
                  }}
                >
                  Press to login
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
              {!isValid && <Error loc="Error">Not valid!</Error>}
              {!isFound && isVisible1 && (
                <Error loc="Error">No such user found!</Error>
              )}
            </AccountContainer>
          )}
          {isVisible2 && (
            <AccountContainer loc="AccountContainer">
              <AccountText loc="AccountText">
                Enter e-mail to create account
              </AccountText>
              <AccountForm
                name="Email"
                type="Email"
                value={inputObj["Email"]}
                handleChange={handleChange}
                error={errorInput["Email"]}
              />
              {isValid && !isFound && (
                <AccountActionButton
                  loc="AccountActionButton"
                  onClick={() => {
                    addNewId();
                  }}
                >
                  Create new account now
                </AccountActionButton>
              )}
              {!isValid && <Error loc="Error">Not valid!</Error>}
              {isFound && isVisible2 && (
                <Error loc="Error">Email already exists!</Error>
              )}
            </AccountContainer>
          )}
        </InputContainerAccount>
        <ToastComponent />
      </AccountSection>
    </>
  );
};

export default Account;
