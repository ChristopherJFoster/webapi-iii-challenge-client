import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAllUsers } from '../actions/actions';
import User from './User';
import Posts from './Posts';

const Users = ({ allUsers, fetchAllUsers }) => {
  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className='all-users'>
      <h1>Users</h1>
      {allUsers.map(user => (
        <User key={user.id} user={user} />
      ))}
      <Posts />
    </div>
  );
};

const mapStateToProps = ({ allUsers }) => ({
  allUsers
});

export default connect(
  mapStateToProps,
  { fetchAllUsers }
)(Users);
