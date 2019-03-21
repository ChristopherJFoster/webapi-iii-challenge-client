import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from '../actions/actions';

const initialState = {
  fetchingAllUsers: false,
  allUsers: [],
  fetchingAllPosts: false,
  allPosts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, fetchingAllUsers: true, errorStatusCode: null };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetchingAllUsers: false,
        allUsers: action.payload,
        errorStatusCode: null
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        fetchingAllUsers: false,
        errorStatusCode: action.payload
      };

    case FETCH_POSTS_REQUEST:
      return { ...state, fetchingAllPosts: true, errorStatusCode: null };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        fetchingAllPosts: false,
        allPosts: action.payload,
        errorStatusCode: null
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        fetchingAllPosts: false,
        errorStatusCode: action.payload
      };

    default:
      return state;
  }
};
