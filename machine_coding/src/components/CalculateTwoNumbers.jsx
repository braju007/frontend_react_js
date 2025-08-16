import React, { useState } from 'react';

export const CalculateTwoNumbers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);
  const [error, setError] = useState('');

  const calculateSum = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setError('Please enter valid numbers');
      setSum(null);
      return;
    }
    setError('');
    setSum(n1 + n2);
  };

  return (
    <div>
      <input
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Number 1"
      />
      <input
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Number 2"
      />
      <button onClick={calculateSum}>Calculate</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {sum !== null && <p>Sum: {sum}</p>}
    </div>
  );
};
