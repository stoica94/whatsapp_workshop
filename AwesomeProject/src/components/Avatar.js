import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

const Avatar = ({style}) => (
  <View style={style}>
    <View style={styles.avatarContainer}>
      <Image
        source={require('../assets/dummy-avatar.png')}
        style={styles.image}
        resizeMode={'contain'}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  avatarContainer: {
    // flex: 1,
    backgroundColor: 'gray',
    borderRadius: 200,
    width: 50,
    height: 50,
  },
  image: {width: 50, height: 50, borderRadius: 200},
});

export default Avatar;
