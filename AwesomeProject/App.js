/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import ChatViewScreen from './src/screens/ChatViewScreen';
import ConversationsScreen from './src/screens/Conversations';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    conversations: ConversationsScreen,
    chatView: ChatViewScreen,
  },
  {
    initialRouteName: 'conversations',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#006655',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

// YellowBox.ignoreWarnings([
//   'Warning: DatePickerAndroid',
//   'RCTRootView cancelTouches',
// ]);

const AppContainer = createAppContainer(AppNavigator);

const App: () => React$Node = () => <AppContainer />;

export default App;
