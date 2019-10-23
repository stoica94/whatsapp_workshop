import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {getMessagesById, postMessage} from '../services/api';
import Compose from '../components/Compose';

const ChatViewScreen = () => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;

  const getMessageItem = item => {
    return (
      <View
        style={[
          styles.message,
          item.incoming ? styles.incomingMessage : styles.outgoingMessage,
        ]}>
        <Text>{item.message}</Text>
      </View>
    );
  };

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      const result = await getMessagesById();
      setMessages(result);
    };
    fetchMessages();
  }, [messages]);

  const submit = message => postMessage(message);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/chat-background.jpg')}>
      <FlatList
        style={styles.container}
        data={messages}
        renderItem={({item}) => getMessageItem(item)}
        keyExtractor={(item, index) => `message-${index}`}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <Compose submit={submit} style={styles.compose} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

ChatViewScreen.navigationOptions = ({navigation}) => {
  return {
    title: navigation.state.params.title,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  message: {
    width: '70%',
    margin: 10,
    padding: 10,
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    alignSelf: 'flex-end',
    backgroundColor: '#E1FFC7',
    borderRadius: 10,
  },
  incomingMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  compose: {
    marginBottom: 10,
  },
});

export default ChatViewScreen;
