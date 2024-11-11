import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import isObjectEmpty from "../../global/utilities/isObjectEmpty";
import useFetchUsers from "../../hooks/useFetchUsers";
import {
  ContactButtonUser,
  ContactContainerUser,
  DisplayUser,
  Error,
  InfoSectionUser,
  Loading,
} from "../Contact/Contact.style";

function Users() {
  const { id } = useParams();
  const [clicked, setClicked] = useState(false);
  const {
    users: user,
    error,
    loading,
  } = useFetchUsers(id, clicked, setClicked);

  console.log("id", id, "user", user, "error", error, "loading", loading);
  console.log("JSON.stringify(user)", JSON.stringify(user));
  return (
    <ContactContainerUser loc="ContactContainerUser">
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
          <InfoSectionUser loc="InfoSection">
            <DisplayUser loc="DisplayUser"> E-mail: {user.Email}</DisplayUser>
            <DisplayUser loc="DisplayUser"> ID: {user.id}</DisplayUser>
          </InfoSectionUser>
          <InfoSectionUser loc="InfoSection">
            <DisplayUser loc="DisplayUser">
              Congratulations you have a new account.
              <br /> You may go explore!
            </DisplayUser>
            <ContactButtonUser loc="ContactButtonUser" to={`/home`}>
              Lets go travel!
            </ContactButtonUser>
          </InfoSectionUser>
        </>
      )}
    </ContactContainerUser>
  );
}

export default Users;
