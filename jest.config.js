module.exports = {
  preset: 'react-native',
  setupFiles: ['./setupTests.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
  ],
};
