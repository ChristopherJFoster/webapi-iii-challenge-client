import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAllUsers } from '../actions/actions';
import User from './User';

const Users = ({ allUsers }) => {
  useEffect(() => {
    fetchAllUsers();
  }, [allUsers]);

  return (
    <div className='all-users'>
      <h1>Users</h1>
      {allUsers.map(user => (
        <User key={user.id} user={user} />
      ))}
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
