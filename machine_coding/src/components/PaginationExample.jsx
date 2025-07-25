import React, { useEffect, useState } from 'react';

export const PaginationExample = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let numOfRecordsPerPage = 10;
  let lastIndex = currentPage * numOfRecordsPerPage;
  let startIndex = lastIndex - numOfRecordsPerPage;
  let dataLength = data.length;
  let numOfPages = Math.ceil(dataLength / numOfRecordsPerPage);
  let currentItems = data.slice(startIndex, lastIndex);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Pagination Example:</h1>
      <ul>
        {currentItems.map((post) => (
          <li key={post.id} style={{ listStyle: 'none' }}>
            {post.title}
          </li>
        ))}
      </ul>

      {Array.from({ length: numOfPages }, (_, index) => (
        <button
          style={{
            backgroundColor:
              currentPage === index + 1 ? 'skyblue' : 'lightgrey',
            padding: '10px 20px',
            margin: '10px',
          }}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
