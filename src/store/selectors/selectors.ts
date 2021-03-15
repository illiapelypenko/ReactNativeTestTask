import { State } from '../../types';

export const postsSelector = (state: State) => state.posts;
export const usersSelector = (state: State) => state.users;
export const commentsSelector = (state: State) => state.comments;
export const isErrorSelector = (state: State) => state.isError;
