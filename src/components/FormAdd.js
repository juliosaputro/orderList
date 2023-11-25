import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import InputForm from './InputForm';
import InputDate from './InputDate';
import {fontSize, normalize} from '../utils/responsive';
import Dropdowncomp from './Dropdowncomp';

export default function FormAdd() {
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
        Sales information
      </Text>
      <InputForm placeholder="Keyword" />
      <InputDate title="sales order Date" />
      <Dropdowncomp />
      <TextInput
        placeholder="Address"
        style={styles.boxAddress}
        scrollEnabled={true}
        editable
        multiline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  boxAddress: {
    paddingHorizontal: 24,
    maxHeight: normalize(180),
    fontWeight: '400',
    fontSize: fontSize(10),
    borderColor: '#CDCDCD',
    borderWidth: 1,
    borderRadius: 8,
    borderBottomWidth: 1,
  },
});
