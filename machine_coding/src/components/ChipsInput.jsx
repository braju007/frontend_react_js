import React, { useState } from 'react';

export const ChipsInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [chipsList, setChipsList] = useState([]);

  const addChipsToList = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const newChips = [...chipsList];
      newChips.push(inputValue);
      setChipsList(newChips);
      setInputValue('');
    }
  };

  const deleteChipsFromList = (index) => {
    const newChips = [...chipsList];
    newChips.splice(index, 1);
    setChipsList(newChips);
  };

  return (
    <div>
      <h1>Chips Input Example:</h1>
      <input
        style={{ padding: '8px', width: '300px', borderRadius: '10px' }}
        placeholder="Enter chip name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => addChipsToList(e)}
      />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginTop: '10px',
          padding: '10px',
          boxSizing: 'border-box',
          maxWidth: '100%',
          margin: '0 300px',
        }}
      >
        {chipsList.map((chip, index) => (
          <span
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '10px',
              backgroundColor: 'lightGray',
              borderRadius: '10px',
              padding: '10px 10px',
            }}
          >
            {chip}
            <button
              style={{
                backgroundColor: 'lightGray',
                marginLeft: '8px',
                border: 'none',
                color: 'red',
              }}
              onClick={() => deleteChipsFromList(index)}
            >
              X
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};
