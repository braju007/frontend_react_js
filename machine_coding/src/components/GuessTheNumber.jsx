import React, { useState } from 'react';

export const GuessTheNumber = () => {
  const generateRandom = () => Math.floor(Math.random() * 100) + 1;

  const [numberToGuess, setNumberToGuess] = useState(generateRandom());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage('Please enter a number between 1 and 100');
      return;
    }

    setAttempts(attempts + 1);

    if (num === numberToGuess) {
      setMessage(
        `Congratulations! You guessed the number in ${attempts + 1} attempts`
      );
    } else if (num < numberToGuess) {
      setMessage('Too low! Try again');
    } else {
      setMessage('Too high! Try again');
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setNumberToGuess(generateRandom());
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '50px 0',
      }}
    >
      <h2>Guess the Number</h2>
      <input
        id="guess-input"
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter a number between 1 and 100"
        style={{ width: '300px', padding: '5px' }}
      />
      <div style={{ margin: '10px' }}>
        <button
          onClick={handleGuess}
          style={{ margin: '0 10px', width: '150px' }}
        >
          Check Guess
        </button>
        <button
          onClick={resetGame}
          style={{ margin: '0 10px', width: '150px' }}
        >
          Reset Game{' '}
        </button>
      </div>
      <p>{message}</p>
    </div>
  );
};
