import React, { useEffect, useState } from 'react';

export const SearchQuery = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const getALlPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getALlPosts();
  }, []);

  const filteredData = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Search Query Example:</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredData.map((post, index) => (
          <li key={post.id} style={{ listStyle: 'none' }}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
