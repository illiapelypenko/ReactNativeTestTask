import { Reducer } from 'redux';
import { ACTION_TYPES } from '../actions/actions';
import { State } from '../../types';

export const initialState: State = {
  posts: [],
  users: [],
  comments: [],
  isError: false
};

const reducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.FETCH_POSTS:
      return { ...state, posts: payload, isError: false };
    case ACTION_TYPES.FETCH_USERS:
      return { ...state, users: payload, isError: false };
    case ACTION_TYPES.FETCH_COMMENTS:
      return { ...state, comments: payload, isError: false };
    case ACTION_TYPES.SET_FETCH_ERROR:
      return { ...state, isError: true };
    default:
      return state;
  }
};

export default reducer;
