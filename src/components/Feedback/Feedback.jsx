import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchUsers from "../../hooks/useFetchUsers";
import useLocalStorage from "../../hooks/useLocalStorage";
import { ContactContainer } from "../Contact/Contact.style";

function Feedback() {
  const { id } = useParams();
  const { users: user, error, loading } = useFetchUsers("/" + id);

  console.log(user);

  return (
    <>
      <ContactContainer>
        {loading && !error && <div>Loading...</div>}
        {error && <div>Error on getting data, Server is down :( </div>}
        {user && (
          <>
            <p> name: {user.Name}</p>
          </>
        )}
        <button onClick={() => resetLocalData()}> Reset</button>
      </ContactContainer>
    </>
  );
}
export default Feedback;
