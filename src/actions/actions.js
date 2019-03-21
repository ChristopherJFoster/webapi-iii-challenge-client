import axios from 'axios';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchAllUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_REQUEST });
  return axios
    .get('https://web17-webapi-iii-challenge.herokuapp.com/api/users')
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USERS_FAILURE, payload: err.response });
    });
};

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchAllPosts = () => dispatch => {
  dispatch({ type: FETCH_POSTS_REQUEST });
  return axios
    .get('https://web17-webapi-iii-challenge.herokuapp.com/api/posts')
    .then(res => {
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_POSTS_FAILURE, payload: err.response });
    });
};
