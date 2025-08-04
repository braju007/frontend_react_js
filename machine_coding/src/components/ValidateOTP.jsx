import React, { useEffect, useRef, useState } from 'react';

export const ValidateOTP = () => {
  const OTP_DIGITS = 5;
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(''));
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    let newValue = value.trim();
    let newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  const handleBackSpace = (e, index) => {
    if (!e.target.value && e.key === 'Backspace') {
      refArr.current[index - 1]?.focus();
    }
  };
  return (
    <div>
      <h1>Validate OTP Example:</h1>
      {inputArr.map((input, index) => {
        return (
          <input
            style={{
              width: '30px',
              margin: '5px',
              height: '20px',
              textAlign: 'center',
            }}
            key={index}
            type="text"
            ref={(input) => (refArr.current[index] = input)}
            value={inputArr[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleBackSpace(e, index)}
          />
        );
      })}
    </div>
  );
};
