import React, {useState} from 'react';
import {View, StyleSheet, Keyboard, Button, TextInput} from 'react-native';

export const Compose = ({submit}) => {
  const [text, setText] = useState('');
  const submitMessage = () => {
    setText('');
    submit(text);
    Keyboard.dismiss();
  };
  return (
    <View style={styles.compose}>
      <TextInput
        style={styles.composeText}
        value={text}
        onChangeText={txt => setText(txt)}
        onSubmitEditing={submitMessage}
        editable={true}
        maxLength={40}
      />
      <Button onPress={submitMessage} title="Send" />
    </View>
  );
};

const styles = StyleSheet.create({
  composeText: {
    width: '80%',
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
<<<<<<< HEAD
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 8,
=======
  },
  compose: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
>>>>>>> 22798f560043cb19fcfc05aaf000ae8141de11be
  },
});

export default Compose;
