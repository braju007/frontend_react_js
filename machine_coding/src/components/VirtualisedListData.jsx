import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

export const VirtualisedListData = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  const Row = ({ index, style }) => {
    const post = posts[index];
    return (
      <div
        style={{
          ...style,
          gap: '10px',
          padding: '10px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            height: '180px',
            width: '100%',
            backgroundColor: 'lightblue',
            border: '1px solid red',
            borderRadius: '15px',
            padding: '10px',
            margin: '10px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {post.title}
        </div>
      </div>
    );
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Virtualised Data Rendering Example (react-window):</h1>
      <List
        height={600} // total height of the visible list
        itemCount={posts.length}
        itemSize={200} // height of each item (match container height)
        width={'100%'} // or a fixed width like 800
      >
        {Row}
      </List>
    </div>
  );
};
