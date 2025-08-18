import React, { useState } from 'react';
import './../css/CardGame.css';

const CARD_SUITS = ['♠', '♥', '♦', '♣'];

const suitColor = {
  '♥': 'red',
  '♦': 'red',
  '♠': 'black',
  '♣': 'black',
};

const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

const CreateCardsList = () => {
  let cardsList = [];
  CARD_SUITS.forEach((symbol) => {
    CARD_VALUES.forEach((value) => {
      cardsList.push({ symbol, value, color: suitColor[symbol] });
    });
  });
  return cardsList;
};

const maxCardsPerDeck = 5;

export const CardGame = () => {
  const [cardsDeck, setCardsDeck] = useState(CreateCardsList());
  const [distributedCards, setDistributedCards] = useState([]);

  const shuffleCards = () => {
    let cardsList = [...cardsDeck];
    cardsList.sort((prev, next) => Math.random() - Math.random());
    return cardsList;
  };

  const distributeCards = () => {
    let shuffledCards = shuffleCards();
    const distributedList = shuffledCards.slice(0, maxCardsPerDeck);
    setDistributedCards(distributedList);
    setCardsDeck(shuffledCards.slice(maxCardsPerDeck));
  };
  return (
    <div>
      <button onClick={() => distributeCards()}>Draw Cards</button>
      {distributedCards.length > 0 && (
        <div className="cardContainer">
          {distributedCards.map((card) => (
            <div className="cardArea">
              <div style={{ color: card?.color }}>{card?.symbol}</div>
              <div style={{ textAlign: 'center', color: card?.color }}>
                {card?.value}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
