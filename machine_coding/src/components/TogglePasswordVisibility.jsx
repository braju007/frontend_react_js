import React, { useState, useRef } from 'react';
import hideEye from './../Icons/hideEye.png';
import viewEye from './../Icons/viewEye.png';

export const TogglePasswordVisibility = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const timeoutRef = useRef(null);

  const togglePassword = () => {
    setIsPasswordVisible(true);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsPasswordVisible(false);
    }, 500);
  };

  return (
    <div
      style={{
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h3>Toggle Password Visibility Example:</h3>
      <div style={{ position: 'relative', width: 'fit-content' }}>
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          style={{ paddingRight: '40px', fontSize: '16px' }}
        />
        <img
          src={isPasswordVisible ? hideEye : viewEye}
          alt="toggle visibility"
          onClick={togglePassword}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '24px',
            height: '24px',
            cursor: 'pointer',
          }}
        />
      </div>
    </div>
  );
};
