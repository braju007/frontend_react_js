import { useState, useEffect, useRef } from 'react';
// import usePrevious from "./usePrevious";

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export const CounterWithPreviousValue = () => {
  const [currentCount, setCurrentCount] = useState(0);

  const increment = () => setCurrentCount((prev) => prev + 1);
  const decrement = () => setCurrentCount((prev) => prev - 1);
  const reset = () => setCurrentCount(0);

  const previousCount = usePrevious(currentCount);

  return (
    <div className="App">
      <h2>Current Count: {currentCount}</h2>
      <h2>Previous Count: {previousCount}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
