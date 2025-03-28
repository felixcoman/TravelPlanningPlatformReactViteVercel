import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import isObjectEmpty from "../../global/utilities/isObjectEmpty";
import useFetchUsers from "../../hooks/useFetchUsers";
import {
  ButtonUser,
  DisplayUser,
  InfoSectionUser,
  UserContainer,
} from "../Account/Account.style";
import { Error, Loading } from "../Contact/Contact.style";

function Users() {
  const { id } = useParams();
  const [clicked, setClicked] = useState(true);
  const {
    users: user,
    error,
    loading,
  } = useFetchUsers(id, clicked, setClicked);

  console.log("id", id, "user", user, "error", error, "loading", loading);
  console.log("JSON.stringify(user)", JSON.stringify(user));

  return (
    <UserContainer loc="UserContainer">
      {loading && !error && (
        <Loading loc="Loading">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          Loading... Waiting for landing...
        </Loading>
      )}
      {error && (
        <Error loc="Error">Error on getting data, Server is down :( </Error>
      )}
      {!loading && !error && (isObjectEmpty(user) || id === undefined) && (
        <Error loc="Error">
          Our team is called from the coffee break and will take care of the
          problem!
        </Error>
      )}
      {user && !isObjectEmpty(user) && (
        <>
          <InfoSectionUser loc="InfoSectionUser">
            <DisplayUser loc="DisplayUser"> E-mail: {user.Email}</DisplayUser>
            <DisplayUser loc="DisplayUser"> ID: {user.id}</DisplayUser>
          </InfoSectionUser>
          <InfoSectionUser loc="InfoSectionUser">
            <DisplayUser loc="DisplayUser">
              Congratulations you have a new account.
              <br /> You may go explore!
            </DisplayUser>
            <ButtonUser loc="ButtonUser" to={`/home`}>
              Lets go travel!
            </ButtonUser>
          </InfoSectionUser>
        </>
      )}
    </UserContainer>
  );
}

export default Users;
