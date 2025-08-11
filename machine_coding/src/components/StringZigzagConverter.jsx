import React, { useState } from 'react';

export const StringZigzagConverter = () => {
  const [inputVal, setInputVal] = useState('');
  const [result, setResult] = useState('');

  const makeZigzag = (array) => {
    return array
      .map((str, index) =>
        index % 2 === 0 ? str : str.split('').reverse().join('')
      )
      .join('');
  };
  const handleValues = () => {
    if (!inputVal.trim()) return;
    const array = inputVal.split(',').map((s) => s.trim());
    setResult(makeZigzag(array));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter strings like one,two,three"
        data-testid="input-box"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button data-testid="submit-button" onClick={handleValues}>
        Submit
      </button>
      <p data-testid="output-result">Output: {result}</p>
    </div>
  );
};
