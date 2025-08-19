import React, { useState } from 'react';

export const CheckboxExample = () => {
  const arr = ['Play Cricket', 'Coding Practice', 'Travelling'];
  const [items, setItems] = useState(arr);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckbox = (e, item) => {
    if (e.target.checked) {
      setCheckedItems((prev) => [...prev, item]);
    } else {
      setCheckedItems((prev) => prev.filter((i) => i !== item));
    }
  };

  const handleDelete = (itemToDelete) => {
    // Remove from both items and checkedItems
    setItems((prev) => prev.filter((item) => item !== itemToDelete));
    setCheckedItems((prev) => prev.filter((item) => item !== itemToDelete));
  };

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            style={{
              listStyle: 'none',
              textAlign: 'left',
              margin: '20px',
              padding: '10px',
            }}
          >
            <input
              type="checkbox"
              checked={checkedItems.includes(item)}
              onChange={(e) => handleCheckbox(e, item)}
            />
            <span>{item}</span>
            {checkedItems.includes(item) && (
              <button
                style={{ marginLeft: '10px' }}
                onClick={() => handleDelete(item)}
              >
                X
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
