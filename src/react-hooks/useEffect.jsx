import React, { useEffect } from "react";
import { useState } from "react";

const UseEffect = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h4 className="text-sm font-semibold">Use Effect</h4>
      <p>Count: {seconds}</p>
    </div>
  );
};
export default UseEffect;
