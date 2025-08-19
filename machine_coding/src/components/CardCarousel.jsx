import React, { useState } from 'react';
import './../css/CardCarousel.css';

const cards = [
  { title: 'Card 1', description: 'Description for Card 1' },
  { title: 'Card 2', description: 'Description for Card 2' },
  { title: 'Card 3', description: 'Description for Card 3' },
];

export const CardCarousel = () => {
  const [index, setIndex] = useState(0);

  if (!cards || cards.length === 0) {
    return <div> No cards available </div>;
  }

  const currentCard = cards[index];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{currentCard.title}</h2>
      <p>{currentCard.description}</p>
      <div>
        <button onClick={() => setIndex(index - 1)} disabled={index === 0}>
          Previous
        </button>
        <span style={{ margin: '0 10px' }}>{index + 1} of 3 </span>
        <button
          onClick={() => setIndex(index + 1)}
          disabled={index === cards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};
