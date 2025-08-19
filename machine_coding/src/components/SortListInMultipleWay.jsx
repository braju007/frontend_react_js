import React, { useState } from 'react';
import './../css/SortListInMultipleWay.css';

const defaultFruits = [
  'Banana',
  'Apple',
  'Cherry',
  'Mango',
  'Blueberry',
  'Kiwi',
  'Pineapple',
  'Fig',
];

export const SortListInMultipleWay = ({ initialList = defaultFruits }) => {
  const [list, setList] = useState([...initialList]);
  const [sortType, setSortType] = useState('default');

  function sortList(type) {
    let sorted = [...initialList];
    if (type === 'az') {
      sorted.sort((a, b) => a.localeCompare(b));
    } else if (type === 'za') {
      sorted.sort((a, b) => b.localeCompare(a));
    } else if (type === 'length') {
      sorted.sort((a, b) => a.length - b.length);
    }
    setList(sorted);
  }

  function handleChange(e) {
    const value = e.target.value;
    setSortType(value);
    sortList(value);
  }

  return (
    <div data-testid="container">
      <div>
        <h2 data-testid="heading"> List Sorter</h2>
      </div>
      <label htmlFor="sort">Sort By:</label>
      <select
        id="sort"
        data-testid="sort-dropdown"
        value={sortType}
        onChange={handleChange}
      >
        <option value="default">Default</option>
        <option value="az">A - Z</option>
        <option value="za">Z - A</option>
        <option value="length">Length - Shorted first</option>
      </select>
      <ul>
        {list.map((item, index) => (
          <li data-testid="list-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
