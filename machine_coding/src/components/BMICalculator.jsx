import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiVal, setBmiVal] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h || w <= 0 || h <= 0) {
      alert('Please enter valid positive numbers for height and weight.');
      return;
    }

    const bmitValue = w / (h / 100) ** 2;
    const roundedBMI = parseFloat(bmitValue.toFixed(1));
    setBmiVal(roundedBMI);
    setCategory(getCategory(roundedBMI));
  };

  const getCategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    else if (bmi < 24.9) return 'Normal';
    else if (bmi < 29.9) return 'Overweight';
    else return 'Obese';
  };

  const reset = () => {
    setWeight('');
    setHeight('');
    setBmiVal(null);
    setCategory('');
  };

  return (
    <div>
      <h2>BMI Calculator</h2>

      <input
        type="number"
        value={weight}
        placeholder="Weight (kg)"
        onChange={(e) => setWeight(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={height}
        placeholder="Height (cm)"
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      <button onClick={reset}>Reset</button>

      {bmiVal !== null && (
        <div>
          <h3>Your BMI: {bmiVal}</h3>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
