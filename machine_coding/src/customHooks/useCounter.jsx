import { useState } from 'react';

export const useCounter = (initialValue = 0, incrementBy = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + incrementBy);
  const decrement = () => setCount((prev) => prev - incrementBy);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};
