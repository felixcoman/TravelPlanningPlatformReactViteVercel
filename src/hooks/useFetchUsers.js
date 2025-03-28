import { useState, useEffect } from "react";

const useFetchUsers = (id, clicked) => {
  const ALL_URL = "/api/users";
  const ID_URL = `/api/users?id=${id}`;

  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  console.log("id", id);

  useEffect(() => {
    if (!clicked) return; // Only fetch when `clicked` is true

    const fetchData = async () => {
      setLoading(true);
      try {
        console.log("id effect", id);
        if (!id) {
          var GO_URL = ALL_URL;
        } else {
          await new Promise((resolve) => setTimeout(resolve, 14000)); // Wait for Edge Config Write Propagation (https://vercel.com/docs/edge-config/edge-config-limits)
          var GO_URL = ID_URL;
        }
        console.log("GO_URL", GO_URL);
        const response = await fetch(GO_URL);
        if (!response.ok)
          throw new Error(
            `Network response was not ok: ${await response.text()}`
          );

        const userData = await response.json();
        console.log("Fetched userData:", userData);
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [clicked]);

  return { users, loading };
};

export default useFetchUsers;
