import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getChats} from '../services/api';
import ChatItem from '../components/ChatItem';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const GET_CONVERSATIONS = gql`
  {
    conversations {
      id
      title
      description
      date
      user {
        id
        avatar
      }
    }
  }
`;

const ChatView = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_CONVERSATIONS);

  const getConversationsView = () => {
    if (loading) {
      return <ActivityIndicator />;
    }
    if (error) {
      return (
        <View>
          <Text>{JSON.stringify(error)}</Text>
        </View>
      );
    }
    return (
      <FlatList
        data={data.conversations}
        renderItem={({item}) => (
          <ChatItem item={item} navigate={navigation.navigate} />
        )}
        keyExtractor={(item, index) => `message-${index}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    );
  };
  return <View style={styles.container}>{getConversationsView()}</View>;
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
