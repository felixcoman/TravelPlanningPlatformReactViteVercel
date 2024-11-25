import { useEffect, useState } from "react";
const useToastTime = (showA) => {
  console.log("inside useToastTime");
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("inside useEffect useToastTime");
    let interval;
    if (showA)
      interval = setInterval(() => {
        setTime((i) => i + 1);
      }, 1000);
    return () => {
      setTime(0);
      clearInterval(interval);
    };
  }, [showA]);
  return { time };
};

export default useToastTime;
