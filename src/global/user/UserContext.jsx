import React, { createContext, useContext, useEffect, useState } from "react";
import { addAllChoice } from "../choice/actions";
import { ChoiceContext } from "../choice/context";
import { addAllItinerary, addAllItineraryLandmark } from "../itinerary/actions";
import { ItineraryContext } from "../itinerary/context";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const { dispatchChoice } = useContext(ChoiceContext);
  const { dispatchItinerary } = useContext(ItineraryContext);

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
