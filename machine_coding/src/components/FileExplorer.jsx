import React, { useState } from 'react';

const dummyJSONData = [
  {
    id: '1',
    name: 'public',
    isFolder: true,
    children: [
      {
        id: '2',
        name: 'index.html',
        isFolder: false,
      },
    ],
  },
  {
    id: '3',
    name: 'src',
    isFolder: true,
    children: [
      {
        id: '4',
        name: 'App.js',
        isFolder: false,
      },
      {
        id: '5',
        name: 'index.js',
        isFolder: false,
      },
      {
        id: '6',
        name: 'styles.css',
        isFolder: false,
      },
    ],
  },
];

export const FileExplorer = ({ dummyJSON = dummyJSONData }) => {
  const [isExpanded, setIsExpanded] = useState({});

  return (
    <div style={{ paddingLeft: '20px', textAlign: 'left', pointer: 'cursor' }}>
      {dummyJSON.map((node) => (
        <div>
          {node.isFolder && (
            <span
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  [node.name]: !prev[node.name],
                }))
              }
            >
              {isExpanded[node.name] ? '-' : '+'}
            </span>
          )}
          <span>{node?.name}</span>
          {isExpanded[node?.name] && node.children && (
            <FileExplorer dummyJSON={node.children} />
          )}
        </div>
      ))}
    </div>
  );
};
