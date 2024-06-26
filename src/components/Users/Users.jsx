import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchUsers from "../../hooks/useFetchUsers";
import { ContactContainer } from "../Contact/Contact.style";
import { ButtonInfo, InfoSection, InfoUser } from "../Explore/Explore.style";
import { Error, Loading } from "../MainHome/MainHome.style";

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
    <ContactContainer>
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
          <InfoSection loc="InfoSection">
            <InfoUser loc="InfoUser"> E-mail: {user.Email}</InfoUser>
            <InfoUser loc="InfoUser"> ID: {user.id}</InfoUser>
          </InfoSection>
          <InfoSection loc="InfoSection">
            <InfoUser loc="InfoUser">
              Congratulations you have a new account. You may go explore!
            </InfoUser>
            <ButtonInfo loc="ButtonInfo" to={`/home`}>
              Lets go travel!
            </ButtonInfo>
          </InfoSection>
        </>
      )}
    </ContactContainer>
  );
}

export default Users;
