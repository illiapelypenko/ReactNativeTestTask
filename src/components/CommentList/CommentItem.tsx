import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { Comment } from '../../types';

export type CommentItemProps = {
  comment: Comment;
};

export const CommentItem = ({ comment: { name, body } }: CommentItemProps) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text>{body}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
});
