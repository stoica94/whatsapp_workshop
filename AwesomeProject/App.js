/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Platform,
  Button,
} from 'react-native';
import ChatViewScreen from './src/screens/ChatViewScreen';
import Conversations from './src/screens/Conversations';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import {Colors} from 'react-native/Libraries/NewAppScreen';
const CONVERSATIONS = 'CONVERSATIONS';
const App: () => React$Node = () => {
  const [currentScreen, setCurrentScreen] = useState('CONVERSATIONS');
  const switchScreen = () => {
    if (currentScreen === CONVERSATIONS) {
      setCurrentScreen('CHAT_VIEW');
    } else {
      setCurrentScreen(CONVERSATIONS);
    }
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {currentScreen === 'CONVERSATIONS' ? (
            <Conversations />
          ) : (
            <ChatViewScreen />
          )}
          <Button title={'Switch screen'} onPress={switchScreen} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    width: '80%',
  },
  instructions: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 15,
  },
  workshopInstructions: {
    alignItems: 'flex-start',
  },
});

export default App;
