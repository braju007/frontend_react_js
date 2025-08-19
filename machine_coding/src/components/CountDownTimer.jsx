import React, { useEffect, useState } from 'react';

export const CountDownTimer = ({ initialSeconds = 60 }) => {
  const [count, setCount] = useState(initialSeconds);

  useEffect(() => {
    if (count > 0) {
      let timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [count]);

  return (
    <div>
      <h1>Counter Example : </h1>
      <p>Count: {count}</p>
    </div>
  );
};
