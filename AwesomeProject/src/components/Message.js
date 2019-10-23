import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Message = ({messageText, incoming}) => (
  <View style={incoming ? styles.incomingMessage : styles.outgoingMessage}>
    <Text>{messageText}</Text>
  </View>
);

const styles = StyleSheet.create({
  outgoingMessage: {
    minWidth: '50%',
    alignSelf: 'flex-end',
    backgroundColor: 'lightgreen',
  },
  incomingMessage: {
    minWidth: '50%',
    alignSelf: 'flex-start',
    backgroundColor: 'lightgray',
  },
});

export default Message;
