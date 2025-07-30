import React, { useRef, useState } from 'react';

export const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeRef = useRef(null);

  const startTime = () => {
    if (!isRunning) {
      setIsRunning(true);
      timeRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const pauseTime = () => {
    setIsRunning(false);
    clearInterval(timeRef.current);
  };

  const resetTime = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Stopwatch</h1>
      <h2>Time: {seconds} sec</h2>
      <div>
        <button onClick={startTime} disabled={isRunning}>
          Start
        </button>
        <button onClick={pauseTime} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={resetTime}>Reset</button>
      </div>
    </div>
  );
};
