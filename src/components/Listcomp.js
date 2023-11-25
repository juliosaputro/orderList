import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {fontSize, normalize} from '../utils/responsive';

export default function Listcomp({
  onPress,
  name = 'PROFES',
  orderNo = '50_002',
  dateorder = '',
}) {
  const dateWithoutTimeZone = dateorder.slice(0, -6);

  const newDate = new Date(dateWithoutTimeZone);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text
        style={{
          fontSize: fontSize(14),
          fontWeight: 500,
          color: '#000',
        }}>
        {name}
      </Text>
      <Text
        style={{
          fontSize: fontSize(14),
          fontWeight: 500,
          color: '#000',
        }}>
        {orderNo}
      </Text>
      <Text
        style={{
          fontSize: fontSize(14),
          fontWeight: 500,
          color: '#000',
        }}>
        {newDate.toLocaleDateString()}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: normalize(328),
    height: normalize(52),
    alignItems: 'center',
    borderColor: '#CDCDCD',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 12,
    fontFamily: 'DMSans',
  },
  val: {
    fontSize: fontSize(20),
    color: '#000',
  },
});
