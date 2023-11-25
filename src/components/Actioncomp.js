import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {normalize, fontSize} from '../utils/responsive';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Actioncomp({onEdit, onDelete}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{alignContent: 'center', marginHorizontal: normalize(4)}}
        onPress={onEdit}
        accessibilityLabel="Edit Button">
        <Icon name="pencil" size={fontSize(20)} color={'#000'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignContent: 'center', marginHorizontal: normalize(4)}}
        onPress={onDelete}
        accessibilityLabel="Delete Button">
        <Icon name="trash" size={fontSize(20)} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
}
