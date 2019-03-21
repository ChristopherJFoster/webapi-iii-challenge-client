import React from 'react';
import { connect } from 'react-redux';

import { fetchUserPosts } from '../actions/actions';

export const User = ({ user, fetchUserPosts }) => {
  return (
    <div className='user'>
      <h2>{user.name}</h2>
    </div>
  );
};

export default connect(
  null,
  { fetchUserPosts }
)(User);
