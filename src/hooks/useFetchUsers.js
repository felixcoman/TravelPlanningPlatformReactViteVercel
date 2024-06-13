import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/users";

const useFetchUsers = (id) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL + id);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const userData = await response.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        setError("Eroare 808");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { users, loading, error };
};

export default useFetchUsers;
