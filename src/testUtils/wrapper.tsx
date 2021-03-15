import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTE_NAMES } from './../constants/routeNames';
import { store } from './../store/store';
import { ErrorBoundary } from './../components/ErrorBoundry/ErrorBoundary';
import { PostDetails } from './../screens/PostDetails/PostDetails';

const initialMetrics = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const Stack = createStackNavigator();

export const TestWrapper = ({ Component }) => {
  const TestScreen = () => (
    <View>
      <Component />
    </View>
  );

  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialMetrics}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={ROUTE_NAMES.POSTS_EXPLORER}
            screenOptions={{ headerBackTitle: 'Back' }}>
            <Stack.Screen
              name={ROUTE_NAMES.POSTS_EXPLORER}
              component={TestScreen}
              options={{
                title: 'Post explorer',
              }}
            />
            <Stack.Screen
              name={ROUTE_NAMES.POST_DETAILS}
              component={PostDetails}
              options={{
                title: 'Post details',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
