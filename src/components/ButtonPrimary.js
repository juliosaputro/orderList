import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {normalize, fontSize} from '../utils/responsive';

export default function ButtonPrimary({
  title = '',
  onPress,
  background = '#677800',
  color = '#fff',
}) {
  return (
    <TouchableOpacity
      mode="contained"
      style={{
        width: normalize(98),
        backgroundColor: background,
        padding: normalize(3),
        marginTop: normalize(12),
        marginHorizontal: normalize(8),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#677800',
        borderWidth: 1,
        borderRadius: 15,
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: fontSize(12),
          fontWeight: '500',
          color: color,
          lineHeight: normalize(20),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
