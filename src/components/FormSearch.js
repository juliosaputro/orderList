import React from 'react';
import {View, Text} from 'react-native';
import InputForm from './InputForm';
import InputDate from './InputDate';
import {fontSize, normalize} from '../utils/responsive';

export default function FormSearch() {
  return (
    <View
      style={{
        borderColor: '#CDCDCD',
        borderWidth: 1,
        borderRadius: 8,
        padding: normalize(14),
      }}>
      <Text
        style={{
          fontFamily: 'Poppins',
          fontSize: fontSize(16),
          fontWeight: 500,
          color: '#000000',
        }}>
        Search
      </Text>
      <InputForm placeholder="Keyword" />
      <InputDate title="Order Date" />
    </View>
  );
}
