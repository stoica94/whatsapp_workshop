import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatItem = ({title, description, date}) => (
  <View style={styles.itemContainer}>
    <Avatar style={styles.avatar} />
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <View style={styles.arrowContainer}>
      <Text style={styles.description}>{date}</Text>
      <Icon name="chevron-right" color={'gray'} style={styles.icon} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  avatar: {flex: 1},
  arrowContainer: {
    flex: 4,
    alignItems: 'flex-end',
    // alignSelf: 'flex-end',
    paddingRight: 10,
  },
  titleContainer: {
    paddingRight: 10,
    flex: 2,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
  },
  description: {
    color: 'gray',
    flex: 1,
  },
  icon: {
    flex: 0.5,
    fontWeight: 'bold',
  },
});
export default ChatItem;
