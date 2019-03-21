import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export const Post = ({ post, allUsers }) => {
  //   let user = '';

  //   useEffect(() => {
  //     if (!user) {
  //       user = allUsers.filter(user => user.id === post.user_id)[0].name;
  //     }
  //   }, []);

  return (
    <div className='post'>
      <h4>{allUsers.filter(user => user.id === post.user_id)[0].name}</h4>
      <p>{post.text}</p>
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
