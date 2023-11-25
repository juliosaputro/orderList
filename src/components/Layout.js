import React from 'react';
import {View, Text} from 'react-native';
import {normalize, fontSize} from '../utils/responsive';
import Header from './Header';

export default function Layout({children, title = ''}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#677800',
      }}>
      <Header />
      <View
        style={{
          height: normalize(70),
          justifyContent: 'flex-end',
          paddingHorizontal: normalize(15),
        }}>
        <Text
          style={{
            fontSize: fontSize(36),
            fontWeight: 600,
            color: '#fff',
          }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          width: normalize(360),
          height: normalize(600),
          backgroundColor: '#EEEEEE',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          zIndex: 1,
          position: 'absolute',
          bottom: 0,
          padding: 16,
        }}>
        {children}
      </View>
    </View>
  );
}
