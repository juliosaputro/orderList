import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {normalize, fontSize} from '../utils/responsive';
import Logo from '../assets/ask.svg';
import ButtonPrimary from './ButtonPrimary';
import {useSelector} from 'react-redux';
import {usePost} from '../helper/request';

export default function ModalDelete({closeModal}) {
  const {actionReducer} = useSelector(s => s);

  const [func_delete_item, res_delete_item] = usePost('Order/DeleteItem');

  // function delete
  function delete_item() {
    let par = actionReducer.stateData;
    func_delete_item(par);
  }

  useEffect(() => {
    if (res_delete_item.success) {
      console.log('sukses delete', res_delete_item.success_res);
    }
  }, [res_delete_item.success]);

  return (
    <View style={styles.indicator}>
      <View style={{alignItems: 'center', marginBottom: normalize(20)}}>
        <Logo />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: fontSize(15),
            fontWeight: 500,
            color: '#000',
          }}>
          Are you sure wants to delete this item ?
        </Text>
      </View>
      <View>
        <View style={styles.column}>
          <ButtonPrimary
            title="Yes"
            onPress={() => {
              delete_item();
              closeModal();
            }}
          />
          <ButtonPrimary
            title="No"
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
