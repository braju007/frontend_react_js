import React, { useCallback, useState } from 'react';
import './../css/SortListSimpleExample.css';

export const SortListSimpleExample = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const sortItems = useCallback((order) => {
    setItems((prevItems) => {
      const sortedItems = [...prevItems];
      sortedItems.sort((a, b) =>
        order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
      );
      return sortedItems;
    });
  }, []);

  const handleAddItem = () => {
    if (newItem) {
      setItems((prev) => [...prev, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className="sortable-list-container">
      <h3>Sortable List</h3>
      <input
        type="text"
        placeholder="Add a new item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>

      <div>
        <button onClick={() => sortItems('asc')}>Sort Ascending</button>
        <button onClick={() => sortItems('desc')}>Sort Descending</button>
      </div>
      <div className="list-items">
        <ul>
          {items.map((item, index) => (
            <li key={index} id={`item-${index}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
