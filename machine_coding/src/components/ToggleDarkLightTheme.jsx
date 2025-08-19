import React, { useState } from 'react';
import './../css/ToggleDarkLightTheme.css';

export const ToggleDarkLightTheme = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      style={{
        backgroundColor: isToggled ? '#000' : '#fff',
        width: 'auto',
        height: '500px',
        border: '1px solid red',
        margin: '10px',
        textAlign: 'end',
      }}
    >
      <button
        onClick={handleChange}
        className={`toggle-button ${isToggled ? 'on' : 'off'}`}
      >
        {isToggled ? '🌞 Light' : '🌙 Dark'}
      </button>
    </div>
  );
};
