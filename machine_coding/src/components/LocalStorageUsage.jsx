import React, { useEffect, useState } from 'react';

export const LocalStorageUsage = () => {
  const [name, setName] = useState(() => {
    const stored = localStorage.getItem('name');
    return stored ? JSON.parse(stored) : '';
  });
  useEffect(() => {
    // Save to localStorage whenever 'name' changes
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);
  console.log(name);

  const clearName = () => {
    setName('');
    localStorage.removeItem('name');
  };
  return (
    <div>
      Local Storage Usage:
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      Name is : {name}
      <br />
      <button onClick={clearName}>Clear Input</button>
    </div>
  );
};
