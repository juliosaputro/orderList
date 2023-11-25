import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {fontSize, normalize} from '../utils/responsive';

const DATA = [
  {label: 'customer 1', value: '1'},
  {label: 'customer 2', value: '2'},
  {label: 'customer 3', value: '3'},
];

export default function Dropdowncomp() {
  const [valdrop, setValdrop] = useState('');
  const [labeldrop, setLabeldrop] = useState('customer');
  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={{
          fontSize: fontSize(10),
        }}
        selectedTextStyle={{
          fontSize: fontSize(10),
        }}
        inputSearchStyle={styles.inputSearchStyle}
        data={DATA}
        labelField="label"
        valueField="value"
        maxHeight={300}
        placeholder={labeldrop}
        value={valdrop}
        onChange={item => {
          setValdrop(item.value);
          setLabeldrop(item.label);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    height: normalize(32),
    marginVertical: normalize(5),
    paddingHorizontal: 14,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    borderColor: '#CDCDCD',
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: 'DMSans',
    fontWeight: '400',
    fontSize: fontSize(9),
  },
  placeholder: {
    fontFamily: 'Poppins',
    fontSize: fontSize(10),
  },
});
