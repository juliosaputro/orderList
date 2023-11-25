import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {normalize, fontSize} from '../utils/responsive';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputForm from './InputForm';
import ButtonPrimary from './ButtonPrimary';
import {useSelector} from 'react-redux';
import {usePost} from '../helper/request';

export default function ModalNewItem({closeModal}) {
  const {actionReducer} = useSelector(s => s);

  const [titles, setTitles] = useState('New');
  const [names, setNames] = useState('');
  const [prices, setPrices] = useState(0);
  const [qtys, setQtys] = useState(0);
  const totals = prices * qtys;

  useEffect(() => {
    if (actionReducer.action === 'edit') {
      setNames(actionReducer.stateData.ItemName);
      setPrices(actionReducer.stateData.Price);
      setQtys(actionReducer.stateData.Quantity);
      setTitles('Edit');
    }
  }, []);

  const [func_add_item, res_add_item] = usePost('Order/CreateItem');
  const [func_edit_item, res_edit_item] = usePost('Order/UpdateItem');

  // function add
  function add_item() {
    let par = {
      ItemId: -3,
      OrderId: 0,
      ItemName: names,
      Quantity: qtys,
      Price: prices,
    };
    func_add_item(par);
  }

  useEffect(() => {
    if (res_add_item.success) {
      console.log('sukses create', res_add_item.success_res);
    }
  }, [res_add_item.success]);

  //  func edit
  function edit_item() {
    let par = {
      ItemId: -3,
      OrderId: 0,
      ItemName: names,
      Quantity: qtys,
      Price: prices,
    };
    func_edit_item(par);
  }

  useEffect(() => {
    if (res_edit_item.success) {
      console.log('sukses create', res_edit_item.success_res);
    }
  }, [res_edit_item.success]);

  return (
    <View style={styles.indicator}>
      <View style={{alignItems: 'center', marginBottom: normalize(40)}}>
        <Text
          style={{
            fontSize: fontSize(13),
            fontWeight: 500,
            color: '#000',
          }}>
          {titles} Item
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: fontSize(13),
            fontWeight: 500,
            color: '#000',
          }}>
          Item Name {actionReducer.stateData.Price}
        </Text>
        <InputForm value={names} onChangeText={e => setNames(e)} />
        <Text
          style={{
            fontSize: fontSize(13),
            fontWeight: 500,
            color: '#000',
          }}>
          Price
        </Text>
        <InputForm value={`${prices}`} onChangeText={e => setPrices(e)} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: normalize(12),
          }}>
          <Text
            style={{
              fontSize: fontSize(13),
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
              marginLeft: normalize(30),
            }}>
            <TouchableOpacity
              style={styles.btnicon}
              onPress={() => setQtys(qtys - 1)}>
              <Icon name="minus" size={fontSize(16)} color={'#000'} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: fontSize(12),
                fontWeight: 500,
                color: '#000',
              }}>
              {qtys}
            </Text>
            <TouchableOpacity
              style={styles.btnicon}
              onPress={() => setQtys(qtys + 1)}>
              <Icon name="plus" size={fontSize(18)} color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.column}>
          <Text
            style={{
              fontSize: fontSize(13),
              fontWeight: 500,
              color: '#000',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontSize: fontSize(13),
              fontWeight: 500,
              color: '#000',
            }}>
            {totals}
          </Text>
        </View>
        <View style={styles.column}>
          <ButtonPrimary
            title="Save"
            onPress={() => {
              if (actionReducer.action === 'edit') {
                edit_item();
              } else {
                add_item();
              }
              closeModal();
            }}
          />
          <ButtonPrimary
            title="Cancel"
            background="transparent"
            color="#000"
            onPress={closeModal}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    padding: normalize(22),
    marginHorizontal: normalize(10),
    backgroundColor: '#fff',
    borderRadius: 12,
    borderColor: '#e5e5e5',
    borderWidth: 1,
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
  column: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: normalize(8),
  },
});
