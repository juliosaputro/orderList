import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {fontSize, normalize} from '../utils/responsive';

export default function InputForm({placeholder = '', onChangeText, value}) {
  return (
    <TextInput
      value={value}
      style={styles.input}
      placeholder={placeholder}
      autoCapitalize={'none'}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    height: normalize(32),
    alignItems: 'center',
    borderColor: '#CDCDCD',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 8,
    fontFamily: 'Poppins',
    fontSize: fontSize(10),
  },
});
