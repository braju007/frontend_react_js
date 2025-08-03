import React, { useEffect, useState } from 'react';
import { useDebounce } from '../customHooks/useDebounce';

export const UtilizeDebounceHook = () => {
  const [data, setData] = useState({});
  const [inputVal, setInputVal] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedValue = useDebounce(inputVal, 5000);

  useEffect(() => {
    const getPostsdata = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${debouncedValue}`
        );
        const fetchedData = await response.json();
        console.log('Fetched data:', fetchedData);
        setData(fetchedData);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getPostsdata();
  }, [debouncedValue]); // ✅ Use debounced value

  if (isLoading) return <div>Loading....</div>;

  return (
    <div>
      <h1>Utilize Debounce Custom Hook Example:</h1>
      <input
        value={inputVal}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          if (!isNaN(val)) setInputVal(val);
        }}
      />
      <ul>
        <li key={data.id}>{data.title}</li>
      </ul>
    </div>
  );
};
