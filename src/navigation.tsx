import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTE_NAMES } from './constants/routeNames';
import { PostsExplorer } from './screens/PostsExplorer/PostsExplorer';
import { PostDetails } from './screens/PostDetails/PostDetails';
import { TRANSLATIONS } from './constants/translations';

const Stack = createStackNavigator();

const screenOptions = { headerBackTitle: TRANSLATIONS.BACK };

enum SCREEN_TITLES {
  POST_EXPLORER = 'Post explorer',
  POST_DETAILS = 'Post details',
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTE_NAMES.POSTS_EXPLORER}
        screenOptions={screenOptions}>
        <Stack.Screen
          name={ROUTE_NAMES.POSTS_EXPLORER}
          component={PostsExplorer}
          options={{
            title: SCREEN_TITLES.POST_EXPLORER,
          }}
        />
        <Stack.Screen
          name={ROUTE_NAMES.POST_DETAILS}
          component={PostDetails}
          options={{
            title: SCREEN_TITLES.POST_DETAILS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
