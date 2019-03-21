import React from 'react';

export const User = ({ user }) => {
  return (
    <div className='user'>
      <h2>{user.name}</h2>
    </div>
  );
};

export default User;
