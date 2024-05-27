import { useState, useEffect } from "react";

const useFetchData = (url, clicked, setClicked) => {
  // const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if (!url) return;
    if (!url || !clicked) return;
    setClicked(false);
    setError(false);

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // }, [url]);
  }, [url, clicked]);
  return { data, error, loading };
};

export default useFetchData;
