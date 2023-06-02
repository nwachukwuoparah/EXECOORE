import React, { useEffect, useState } from "react";

function NumberGenerator(number, time) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== number) {
      const interval = setInterval(() => {
        setCount((prevNumber) => prevNumber + 1);
      }, time);

      return () => clearInterval(interval);
    }
  }, [count]);
  return count;
}

export default NumberGenerator;
