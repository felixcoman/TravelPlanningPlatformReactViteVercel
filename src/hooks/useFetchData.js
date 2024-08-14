import { useEffect, useState } from "react";

const useFetchData = (url, clicked, setClicked) => {
  console.log("url ", url);
  console.log("clicked ", clicked);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("inside hook 10, data", "error", "loading", data, error, loading);

  console.log("inside hook 12");

  useEffect(() => {
    console.log("inside hook 15");
    if (!url || !clicked) {
      console.log("No url or not clicked");
      return;
    }

    console.log("inside hook 21");
    setClicked(false);
    setError(false);
    setData(null);

    const fetchData = async () => {
      console.log("inside fetchData");
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        const data = await response.json();
        setData(data);
        console.log("set data =", data);
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
