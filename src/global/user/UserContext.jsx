import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("storedUser", storedUser);

    if (storedUser) {
      fetchUser(storedUser);
    }
  }, []);

  const fetchUser = async (userId) => {
    try {
      const response = await fetch(`/api/users?id=${userId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
