import { useEffect, useState } from "react";

const useToastTime = (showT) => {
  console.log("inside useToastTime");
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("inside useEffect useToastTime");
    let interval;
    if (showT)
      interval = setInterval(() => {
        setTime((i) => i + 1);
      }, 1000);
    return () => {
      setTime(0);
      clearInterval(interval);
    };
  }, [showT]);
  return { time };
};

export default useToastTime;
