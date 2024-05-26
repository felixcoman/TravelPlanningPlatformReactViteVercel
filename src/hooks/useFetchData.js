import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001";

const useFetchData = (path = "") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL + path);
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        const newData = await response.json();
        setData(newData);
        setLoading(false);
      } catch (error) {
        setError("Error 808!");
        setLoading(false);
      }
    };
    fetchData();
  }, [path]);
  return { data, loading, error };
};

export default useFetchData;
