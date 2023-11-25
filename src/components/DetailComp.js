import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {fontSize, normalize} from '../utils/responsive';
import Icon from 'react-native-vector-icons/FontAwesome';
import Actioncomp from './Actioncomp';

export default function DetailComp({
  name = 'name',
  price = 20000,
  qty = '1',
  total = 20000,
  onDelete,
  onEdit,
}) {
  return (
    <View style={styles.container}>
      <ColumnComp title={name} val={price} />
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: fontSize(18),
            fontWeight: 500,
            color: '#000',
          }}>
          Qty
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: normalize(79),
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#D9D9D9',
            borderRadius: 30,
          }}>
          <TouchableOpacity style={styles.btnicon}>
            <Icon name="minus" size={fontSize(16)} color={'#000'} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: fontSize(12),
              fontWeight: 500,
              color: '#000',
            }}>
            {qty}
          </Text>
          <TouchableOpacity style={styles.btnicon}>
            <Icon name="plus" size={fontSize(18)} color={'#000'} />
          </TouchableOpacity>
        </View>
      </View>
      <ColumnComp title={'Total'} val={total} />
      <Actioncomp onEdit={onEdit} onDelete={onDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: normalize(328),
    borderColor: '#CDCDCD',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 4,
    fontFamily: 'DMSans',
  },
  val: {
    fontSize: fontSize(20),
    color: '#000',
  },
  btnicon: {
    width: normalize(24),
    height: normalize(24),
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#CDCDCD',
    borderWidth: 1,
  },
});

const ColumnComp = ({title, val}) => (
  <View>
    <Text
      style={{
        fontSize: fontSize(18),
        fontWeight: 500,
        color: '#000',
      }}>
      {title}
    </Text>
    <Text
      style={{
        fontSize: fontSize(12),
        fontWeight: 500,
        color: '#000',
      }}>
      {val}
    </Text>
  </View>
);
