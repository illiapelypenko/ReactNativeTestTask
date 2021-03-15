import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './store/store';
import { Navigation } from './navigation';
import { ErrorBoundary } from './components/ErrorBoundry/ErrorBoundary';

const initialMetrics = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <SafeAreaProvider initialMetrics={initialMetrics}>
          <Navigation />
        </SafeAreaProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
