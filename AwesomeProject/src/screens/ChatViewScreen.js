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
import Message from '../components/Message';

const ChatViewScreen = () => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;

  const renderMessageItem = item => {
    return <Message {...item} />;
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
        renderItem={({item}) => renderMessageItem(item)}
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
  compose: {
    marginBottom: 10,
  },
});

export default ChatViewScreen;
