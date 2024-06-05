import { useState, useEffect } from "react";

const useLocalStorage = (key = null) => {
  const [localData, setLocalData] = useState(null);
  const [isLocalDataEmpty, setIsLocalDataEmpty] = useState(false);

  const resetLocalData = () => {
    localStorage.clear();
    console.log("Local storage cleared!");
  };

  const handleLocalData = (key, value) => {
    if (key !== null && value) {
      localStorage.setItem(key, JSON.stringify(value));
      setLocalData(value);
    }
  };

  const deleteKeyLocalData = (key) => {
    if (key !== null) {
      localStorage.removeItem(key);
      setLocalData(null);
    }
  };

  const getData = () => {
    if (key) {
      const local = localStorage.getItem(key);
      if (local) {
        setLocalData(JSON.parse(local));
        setIsLocalDataEmpty(false);
      } else {
        setIsLocalDataEmpty(true);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [key]);

  return {
    localData,
    resetLocalData,
    handleLocalData,
    deleteKeyLocalData,
    isLocalDataEmpty,
  };
};

export default useLocalStorage;
