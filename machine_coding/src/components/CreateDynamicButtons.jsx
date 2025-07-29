import React, { useState } from 'react';

export const CreateDynamicCards = () => {
  const [cardCount, setCardCount] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const generateCards = () => {
    const count = parseInt(inputValue);
    if (!isNaN(count) && count > 0) {
      setCardCount(count);
      setClickedCards([]);
    }
  };

  const handleCardClick = (index) => {
    if (!clickedCards.includes(index)) {
      setClickedCards([...clickedCards, index]);
    }
  };

  const allCardsClicked = clickedCards.length === cardCount && cardCount > 0;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Dynamic Cards Component</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter number of cards"
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={generateCards} style={{ padding: '8px 16px' }}>
          Generate Cards
        </button>
      </div>

      {allCardsClicked && (
        <div
          style={{
            backgroundColor: '#008080',
            color: 'white',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '4px',
          }}
        >
          All cards are clicked!
        </div>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '10px',
        }}
      >
        {Array.from({ length: cardCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              padding: '20px',
              backgroundColor: clickedCards.includes(index)
                ? '#008080'
                : '#f0f0f0',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.9s',
              fontSize: '16px',
            }}
          >
            Card {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
