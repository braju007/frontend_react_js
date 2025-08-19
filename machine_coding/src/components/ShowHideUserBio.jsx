import React, { useState } from 'react';
import './../css/ShowHideUserBio.css';
import basavaraj_j_photo from './../assets/images/basavaraj_j.jpeg';

const user = {
  name: 'Basavaraj Juganavar',
  bio: 'Frontend developer who loves React and coffee ☕️',
  image: basavaraj_j_photo,
};

export const ShowHideUserBio = () => {
  const [showBio, setShowBio] = useState(false);

  const toggleBio = () => {
    setShowBio((prevState) => !prevState);
  };

  return (
    <div className="user-profile">
      <img src={user.image} alt="Profile" className="profile-img" />
      <h2>{user.name}</h2>
      <button onClick={toggleBio}>{showBio ? 'Hide Bio' : 'Show Bio'}</button>
      {showBio && <p>{user.bio}</p>}
    </div>
  );
};
