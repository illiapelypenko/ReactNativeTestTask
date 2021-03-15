import React from 'react';
import { FlatList } from 'react-native';
import { Post } from '../../types';
import { PostItem } from './PostItem';

export type PostListProps = {
  posts: Array<Post>;
};

export const PostList = ({ posts }: PostListProps) => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostItem post={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
