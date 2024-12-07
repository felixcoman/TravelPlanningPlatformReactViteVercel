import { useEffect, useState } from "react";

const useToastTime = (showT, id) => {
  console.log("inside useToastTime");
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("inside useEffect useToastTime");
    let interval;
    if (showT) {
      setTime(0);
      interval = setInterval(() => {
        setTime((i) => i + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [showT, id]);
  return { time };
};

export default useToastTime;
