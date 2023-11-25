import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {normalize, fontSize} from '../utils/responsive';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Avatar} from 'react-native-paper';

export default function Header({onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{justifyContent: 'center'}} onPress={onPress}>
        <Avatar.Image size={50} source={require('../assets/avatar.png')} />
      </TouchableOpacity>
      <View style={{alignContent: 'center', marginHorizontal: normalize(8)}}>
        <Icon name="bars" size={fontSize(24)} color={'#F8F8F8'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: normalize(10),
    height: normalize(62),
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  tittle: {
    fontFamily: 'DMSans',
    fontWeight: '500',
    fontSize: fontSize(18),
    lineHeight: 22,
    color: '#000000',
  },
});
