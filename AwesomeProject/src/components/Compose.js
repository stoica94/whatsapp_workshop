import {View, Button, TextInput, StyleSheet, Keyboard} from 'react-native';
import React, {useState} from 'react';

const Compose = ({submit, style}) => {
  const [message, setMessage] = useState('');
  const submitMessage = () => {
    setMessage('');
    submit(message);
    Keyboard.dismiss();
  };
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.textInput}
        value={message}
        onChangeText={txt => setMessage(txt)}
        onSubmitEditing={submitMessage}
        editable={true}
        maxLength={40}
      />
      <Button title={'Send'} onPress={submitMessage} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    paddingBottom: 10,
  },
  button: {},
  textInput: {
    width: '90%',
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});

export default Compose;
