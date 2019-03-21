import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAllPosts } from '../actions/actions';
import Post from './Post';

const Posts = ({ allPosts, fetchAllPosts }) => {
  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div className='all-posts'>
      <h1>Posts</h1>
      {allPosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ allPosts }) => ({
  allPosts
});

export default connect(
  mapStateToProps,
  { fetchAllPosts }
)(Posts);
