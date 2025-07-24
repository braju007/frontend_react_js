import React, { useState } from 'react';

export const SimpleCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Counter Example:</h1>
      <h3>Count is: {count}</h3>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};
