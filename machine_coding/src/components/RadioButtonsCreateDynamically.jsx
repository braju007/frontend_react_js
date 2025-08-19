import React, { useState } from 'react';

export const RadioButtonsCreateDynamically = () => {
  const options = ['Cricket', 'Football', 'Hockey'];
  const days = ['weekday', 'weekend'];

  const [option, setOption] = useState('');
  const [day, setDay] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Game and Days Selection</h1>

      <div style={{ marginBottom: '20px' }}>
        <strong>Game:</strong>
        {options.map((elm) => (
          <label key={elm} style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="option"
              value={elm}
              onChange={(e) => setOption(e.target.value)}
              checked={option === elm}
            />
            {elm}
          </label>
        ))}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <strong>Day:</strong>
        {days.map((elm) => (
          <label key={elm} style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="day"
              value={elm}
              onChange={(e) => setDay(e.target.value)}
              checked={day === elm}
            />
            {elm}
          </label>
        ))}
      </div>

      <div>
        <strong>Selected Game:</strong> {option || 'None'}
      </div>
      <div>
        <strong>Selected Day:</strong> {day || 'None'}
      </div>
    </div>
  );
};
