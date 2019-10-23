import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getChats} from '../services/api';
import ChatItem from '../components/ChatItem';

const ChatView = () => {
  const [currentChats, setCurrentChats] = useState([]);
  useEffect(() => {
    getChats().then(responseChats => setCurrentChats(responseChats));
  }, []);

  const renderChatItem = ({item}) => {
    return <ChatItem {...item} date={'Yesterday'} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderChatItem}
        keyExtractor={item => item.id}
        data={currentChats}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 15,
  },
  separator: {
    backgroundColor: 'gray',
    height: 1,
    width: '100%',
  },
});

export default ChatView;
