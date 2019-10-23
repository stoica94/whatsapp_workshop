import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getChats} from '../services/api';
import ChatItem from '../components/ChatItem';

const ChatView = ({navigation}) => {
  const [currentChats, setCurrentChats] = useState([]);
  useEffect(() => {
    getChats().then(responseChats => setCurrentChats(responseChats));
  }, []);

  const renderChatItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('chatView', {
            itemId: item.id,
            title: item.title,
          })
        }>
        <ChatItem {...item} date={'Yesterday'} />
      </TouchableOpacity>
    );
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

ChatView.navigationOptions = {
  title: 'Chats',
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
