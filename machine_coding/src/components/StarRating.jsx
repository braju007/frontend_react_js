import React, { useState } from 'react';

export const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <h1>Star Rating:</h1>
      {Array.from({ length: totalStars }, (_, index) => {
        let starValue = index + 1;
        return (
          <span
            style={{
              fontSize: '75px',
              padding: '10px',
              cursor: 'pointer',
              color: starValue <= rating ? 'gold' : 'grey',
            }}
            onClick={() => setRating(index + 1)}
          >
            *
          </span>
        );
      })}
      <div>
        <button onClick={() => setRating(0)}>Reset</button>
      </div>
    </div>
  );
};
