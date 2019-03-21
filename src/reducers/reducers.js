import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../actions/actions';

const initialState = {
  fetchingAllUsers: false,
  allUsers: [],
  fetchingAllPosts: false,
  allPosts: [],
  fetchingUserPosts: false,
  userPosts: []
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

    default:
      return state;
  }
};
