import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { PostList } from '../../components/PostList/PostList';
import {
  postsSelector,
  isErrorSelector,
} from '../../store/selectors/selectors';
import { ApiErrorHandler } from '../../components/ApiErrorHandler/ApiErrorHandler';
import { useGetData } from '../../hooks/useGetData';
import { TRANSLATIONS } from '../../constants/translations';

export const PostsExplorer = () => {
  const posts = useSelector(postsSelector);
  const isError = useSelector(isErrorSelector);

  const getData = useGetData();

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.postListTitle}>{TRANSLATIONS.POST_LIST_TITLE}</Text>
      {!isError ? <PostList posts={posts} /> : <ApiErrorHandler />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  postListTitle: {
    fontSize: 20,
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
});
