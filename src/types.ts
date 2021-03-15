export type State = {
  posts: Array<Post>;
  users: Array<User>;
  comments: Array<Comment>;
  isError: boolean
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
}

export type Comment = {
  id: number,
  postId: number,
  name: string,
  email: string,
  body: string,
}