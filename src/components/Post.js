import React from 'react';
import { connect } from 'react-redux';

export const Post = ({ post, allUsers }) => {
  return (
    <div>
      {allUsers.length > 0 && (
        <div className='post'>
          <h4>{allUsers.filter(user => user.id === post.user_id)[0].name}</h4>
          <p>{post.text}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ allUsers }) => ({
  allUsers
});

export default connect(
  mapStateToProps,
  null
)(Post);
