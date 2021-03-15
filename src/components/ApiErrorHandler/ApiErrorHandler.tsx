import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { TRANSLATIONS } from '../../constants/translations';
import { useGetData } from '../../hooks/useGetData';

export const ApiErrorHandler = () => {
  const getData = useGetData();

  const handlePress = () => {
    getData();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.error}>{TRANSLATIONS.ERROR}</Text>
      <Pressable onPress={handlePress} style={styles.retryButton}>
        <Text style={styles.retryButtonContent}>{TRANSLATIONS.RETRY}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  retryButton: {
    backgroundColor: 'skyblue',
    padding: 10,
  },
  retryButtonContent: {
    color: 'white',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  error: {
    marginBottom: 10,
    color: 'red',
  },
});
