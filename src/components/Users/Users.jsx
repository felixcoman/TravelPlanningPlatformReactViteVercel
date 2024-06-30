import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchUsers from "../../hooks/useFetchUsers";
import {
  ContactContainerUser,
  Error,
  Loading,
  InfoSectionUser,
  DisplayUser,
  ContactButtonUser,
} from "../Contact/Contact.style";

function Users() {
  const { id } = useParams();
  const [clicked, setClicked] = useState(false);
  const {
    users: user,
    error,
    loading,
  } = useFetchUsers(id, clicked, setClicked);

  const isObjectEmpty = (user) => {
    return JSON.stringify(user) === "{}";
  };
  console.log("id", id, "user", user, "error", error, "loading", loading);
  console.log("JSON.stringify(user)", JSON.stringify(user));
  return (
    <ContactContainerUser loc="ContactContainerUser">
      {loading && !error && <Loading loc="Loading">Loading...</Loading>}
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
