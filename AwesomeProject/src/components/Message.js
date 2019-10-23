import {Text, StyleSheet} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const Message = ({message, incoming}) => {
  const animation = incoming ? 'fadeInLeft' : 'fadeInRight';

  return (
    <Animatable.View
      animation={animation}
      duration={300}
      style={[
        styles.message,
        incoming ? styles.incomingMessage : styles.outgoingMessage,
      ]}>
      <Text>{message}</Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
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

export default Message;
