import React from 'react';
import { FlatList, View, StyleProp, ViewStyle } from 'react-native';
import { Comment } from '../../types';
import { CommentItem } from './CommentItem';

export type CommentListProps = {
  comments: Array<Comment>;
  style: StyleProp<ViewStyle>;
};

const CommentListHeaderComponent = () => <View></View>;

export const CommentList = ({ comments, style }: CommentListProps) => {
  return (
    <FlatList
      ListHeaderComponent={CommentListHeaderComponent}
      data={comments}
      renderItem={({ item }) => <CommentItem comment={item} />}
      keyExtractor={(item) => item.id.toString()}
      style={style}
    />
  );
};
