import { useState, useEffect } from "react";

const useFetchData = (url, clicked, setClicked) => {
  console.log("url ", url);
  console.log("clicked ", clicked);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("sunt in hook 8");

  useEffect(() => {
    console.log("sunt in hook 11");
    if (!url || !clicked) {
      console.log("No url or not clicked");
      return;
    }
    console.log("sunt in hook 15");
    setClicked(false);
    setError(false);
    // setData(null);

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
  }, [url, clicked]);
  return { data, error, loading, clicked, setData };
};

export default useFetchData;
