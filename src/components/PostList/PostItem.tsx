import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Post } from '../../types';
import { ROUTE_NAMES } from '../../constants/routeNames';

export type PostItemProps = {
  post: Post;
};

export const PostItem = ({ post }: PostItemProps) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(ROUTE_NAMES.POST_DETAILS, post)}>
      <Text style={{ fontSize: 18, fontWeight: '500' }}>{post.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
