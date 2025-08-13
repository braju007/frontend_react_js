import React, { useState } from 'react';

export const DiceRoller = () => {
  const [diceValue, setDiceValue] = useState(null);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomNumber);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Dice Roller</h2>
      <button onClick={rollDice}>Roll Dice</button>
      <h3>{diceValue !== null ? `🎲 ${diceValue}` : 'Click to roll!'}</h3>
    </div>
  );
};
