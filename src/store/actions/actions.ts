import { Dispatch } from "redux";
import { fetchData } from '../../api';
import { POSTS_PATHNAME, USERS_PATHNAME, COMMENTS_PATHNAME } from '../../constants/api';
import { Comment, Post } from "../../types";

export enum ACTION_TYPES {
  FETCH_POSTS,
  FETCH_USERS,
  FETCH_COMMENTS,
  SET_FETCH_ERROR
}

export type Action = {
  type: ACTION_TYPES,
  payload: Post[] | Action[] | Comment[]
}

export const fetchPosts = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetchData(POSTS_PATHNAME);

    const posts = await response.json();

    dispatch( {
      type: ACTION_TYPES.FETCH_POSTS,
      payload: posts,
    });
  } catch {
    dispatch( {
      type: ACTION_TYPES.SET_FETCH_ERROR
    });
  }
};

export const fetchUsers = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetchData(USERS_PATHNAME);

    const users = await response.json();

    dispatch( {
      type: ACTION_TYPES.FETCH_USERS,
      payload: users,
    });
  } catch {
    dispatch( {
      type: ACTION_TYPES.SET_FETCH_ERROR
    });
  }
};

export const fetchComments = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetchData(COMMENTS_PATHNAME);

    const comments = await response.json();

    dispatch( {
      type: ACTION_TYPES.FETCH_COMMENTS,
      payload: comments,
    });
  } catch {
    dispatch( {
      type: ACTION_TYPES.SET_FETCH_ERROR
    });
  }
};
