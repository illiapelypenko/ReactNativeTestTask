import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { CommentList } from '../../components/CommentList/CommentList';
import {
  usersSelector,
  commentsSelector,
} from '../../store/selectors/selectors';
import { Comment, Post, User } from '../../types';
import { TRANSLATIONS } from '../../constants/translations';

type PostDetailsProps = {
  route: RouteProp<{ params: Post }, 'params'>;
};

export const PostDetails = ({ route }: PostDetailsProps) => {
  const post = route.params;

  const users = useSelector(usersSelector);
  const comments = useSelector(commentsSelector);

  const postAuthor = users.find((user: User) => user.id === post.userId);
  const postComments = comments.filter(
    (comment: Comment) => comment.postId === post.id,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      <Text style={styles.authorName}>
        {postAuthor?.username || TRANSLATIONS.ANONYMOUS}
      </Text>
      <Text style={styles.commentListTitle}>{TRANSLATIONS.COMMENTS}:</Text>
      <CommentList comments={postComments} style={{ marginTop: 20 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  body: {
    marginBottom: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'right',
  },
  commentListTitle: {
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
});
