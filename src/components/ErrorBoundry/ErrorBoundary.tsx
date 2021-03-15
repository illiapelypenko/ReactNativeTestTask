import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TRANSLATIONS } from '../../constants/translations';

export class ErrorBoundary extends Component {
  state = { error: false };

  static getDerivedStateFromError() {
    return { error: true };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    return error ? (
      <View style={styles.container}>
        <Text>{TRANSLATIONS.ERROR}</Text>
      </View>
    ) : (
      children
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: '500',
  },
});
