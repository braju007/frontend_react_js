import React, { useState, useEffect, useRef } from 'react';

export const TimerStopWatch = () => {
  const [time, setTime] = useState(3597); // time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); // stores setInterval ID

  // Start the timer
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  // Pause the timer
  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  // Reset the timer
  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  // Format seconds into HH:MM:SS
  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>⏱ Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <div>
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handlePause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
