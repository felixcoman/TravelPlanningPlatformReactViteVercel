import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchUsers from "../../hooks/useFetchUsers";
import useLocalStorage from "../../hooks/useLocalStorage";
import { ContactContainer } from "../Contact/Contact.style";

function Users() {
  const { id } = useParams();
  const { users: user, error, loading } = useFetchUsers(`/${id}`);

  return (
    <ContactContainer>
      {loading && !error && <div>Loading...</div>}
      {error && <div>Error on getting data, Server is down :( </div>}
      {user && (
        <>
          <p> E-mail: {user.Email}</p>
          <p> ID: {user.id}</p>
        </>
      )}
      <button onClick={() => resetLocalData()}>Reset</button>
    </ContactContainer>
  );
}

export default Users;
