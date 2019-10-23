import React, {useState, useEffect} from 'react';
import {Text, View, ImageBackground, FlatList, StyleSheet} from 'react-native';
import {getMessagesById} from '../services/api';

const ChatViewScreen = () => {
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

  const [messages, setMessages] = useState(() => {
    const fetchMessages = async () => {
      const result = await getMessagesById();
      setMessages(result);
    };
    fetchMessages();
  }, []);

  useEffect(() => {}, []);

  return (
    <ImageBackground
      source={require('../assets/chat-background.jpg')}
      style={styles.container}>
      <FlatList
        style={styles.container}
        data={messages}
        renderItem={({item}) => getMessageItem(item)}
        keyExtractor={(item, index) => `message-${index}`}
      />
    </ImageBackground>
  );
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
});

export default ChatViewScreen;
