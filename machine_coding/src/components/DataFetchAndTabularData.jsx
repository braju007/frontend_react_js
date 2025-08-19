import React, { useState } from 'react';
import './../css/DataFetchAndTabularData.css';

const sampleData = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 22 },
  { id: 4, name: 'David', age: 28 },
  { id: 5, name: 'Eve', age: 27 },
  { id: 6, name: 'Frank', age: 33 },
  { id: 7, name: 'Grace', age: 24 },
  { id: 8, name: 'Hank', age: 26 },
  { id: 9, name: 'Ivy', age: 21 },
  { id: 10, name: 'Jack', age: 29 },
];

export const DataFetchAndTabularData = () => {
  let data = sampleData;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const totalPages = Math.ceil(data.length / pageSize);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePagesSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const currentData = data.slice(startIndex, startIndex + pageSize);
  const headers = data.length > 0 ? Object.keys(data[0]) : [];
  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Data Table</h2>
      {data.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <>
          <table
            vorder="1"
            cellPadding="10"
            style={{ width: '100%', borderCollapse: 'collapse' }}
          >
            <thead>
              <tr>
                {headers.map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.map((row, index) => (
                <tr key={index}>
                  {headers.map((key) => (
                    <td key={key}>{row[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              justiFyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <button onClick={handlePrevious} disabled={currentPage === 1}>
                Previous
              </button>
              <span style={{ margin: '0 10px' }}>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
            <div>
              Rows per page:{' '}
              <select value={pageSize} onChange={handlePagesSizeChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
