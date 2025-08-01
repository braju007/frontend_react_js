import React, { useEffect, useState } from 'react';
import './components.css';

export const TrafficLights = () => {
  const [light, setLight] = useState('red');

  useEffect(() => {
    let timer = setTimeout(
      () => {
        setLight((prev) => {
          if (prev === 'red') return 'yellow';
          if (prev === 'yellow') return 'green';
          return 'red';
        });
      },
      light === 'red' ? 3000 : light === 'yellow' ? 1000 : 2000
    );
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <h2 data-testid="title">Traffic Lights</h2>
      <div
        className="traffic-light"
        id="traffic-light"
        data-testid="traffic-light"
      >
        <div
          id="red-light"
          data-testid="red-light"
          className={`circle${light === 'red' ? ' red-on' : ''}`}
        ></div>
        <div
          id="yellow-light"
          data-testid="yellow-light"
          className={`circle${light === 'yellow' ? ' yellow-on' : ''}`}
        ></div>
        <div
          id="green-light"
          data-testid="green-light"
          className={`circle${light === 'green' ? ' green-on' : ''}`}
        ></div>
      </div>
    </div>
  );
};
