import React, { useState, useEffect } from 'react';

export const FetchUsersData = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getUsersData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://dummy-json.mock.beeceptor.com/users'
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      // if(!response.ok){
      //     setError(error.message);
      // }
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <h1>Fetch User's Details:</h1>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {users.map((user, index) => (
          <li
            key={user.id}
            style={{
              alignItems: 'baseline',
              alignContent: 'center',
              textAlign: 'left',
              padding: '10px',
              width: '200px',
              height: '300px',
              // border:'1px solid red',
              listStyle: 'none',
              margin: '5px',
              borderRadius: '10px',
              backgroundColor: '#5fb8d4',
              color: 'white',
              fontSize: '16px',
            }}
          >
            <div>
              <p>
                <img
                  width="100px"
                  height="65px"
                  src="https://static.vecteezy.com/system/resources/previews/003/654/375/non_2x/alphabet-letter-logo-r-icon-for-company-and-business-simple-icon-design-for-corporate-identity-with-line-stripes-and-red-circle-vector.jpg"
                  style={{ borderRadius: '50%' }}
                />
              </p>
              User ID: {user.id}
              <br />
              User Name: {user.name}
              <br />
              Company: {user.company}
              <br />
              Country: {user.country}
              <br />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
