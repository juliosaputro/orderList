import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import Layout from '../components/Layout';
import FormAdd from '../components/FormAdd';
import Modal from 'react-native-modal';
import ButtonPrimary from '../components/ButtonPrimary';
import {normalize, fontSize} from '../utils/responsive';
import DetailComp from '../components/DetailComp';
import ModalNewItem from '../components/ModalNewItem';
import ModalDelete from '../components/ModalDelete';
import {useGet} from '../helper/request';
import {useDispatch, useSelector} from 'react-redux';
import {updateListItem} from '../reducers/listitemReducer';
import {updateActions, updateStateData} from '../reducers/actionReducer';

export default function () {
  const dispatch = useDispatch();

  const [datas, setDatas] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [mdlAdd, setMdlAdd] = useState(false);
  const [mdlDelete, setMdlDelete] = useState(false);

  const {authReducer} = useSelector(s => s);

  //get data
  const [fetch_list_data, res_list_data] = useGet();

  function fetch_data() {
    let par = {
      state: authReducer.states.value,
    };
    fetch_list_data(par, `Order/GetItems`);
  }

  useEffect(() => {
    if (authReducer.access_token.value !== '') {
      fetch_data();
    }
  }, [authReducer.access_token.value]);

  useEffect(() => {
    if (res_list_data.success) {
      dispatch(updateListItem(res_list_data.success_res));
      setDatas(res_list_data.success_res);
    }
  }, [res_list_data.success]);

  useEffect(() => {
    if (res_list_data.failed) {
      setDatas([]);
    }
  }, [res_list_data.failed]);

  // get total

  useEffect(() => {
    if (datas.length !== 0) {
      datas.reduce(
        (accumulator, currentItem) => {
          setTotalQuantity((accumulator.totalQuantity += currentItem.Quantity));
          setTotalPrice(
            (accumulator.totalPrice +=
              currentItem.Price * currentItem.Quantity),
          );
          return accumulator;
        },
        {totalQuantity: 0, totalPrice: 0},
      );
    }
  }, [datas]);

  return (
    <Layout title="Sales Order Input">
      <FormAdd />
      <View style={styles.column}>
        <Text
          style={{
            fontSize: fontSize(20),
            fontWeight: 500,
            color: '#000',
            lineHeight: normalize(50),
          }}>
          Detail Sales
        </Text>
        <ButtonPrimary
          title="Add Item"
          onPress={() => {
            dispatch(updateActions('add'));
            setMdlAdd(true);
          }}
        />
      </View>
      <ScrollView
        style={{
          marginBottom: normalize(120),
        }}
        refreshControl={
          <RefreshControl
            refreshing={res_list_data.loading}
            onRefresh={() => fetch_data()}
          />
        }>
        {datas.map((x, y) => (
          <DetailComp
            key={y}
            name={x.ItemName}
            price={x.Price}
            qty={x.Quantity}
            total={x.Price * x.Quantity}
            onEdit={() => {
              dispatch(updateStateData(x));
              dispatch(updateActions('edit'));
              setMdlAdd(true);
            }}
            onDelete={() => {
              setMdlDelete(true);
              dispatch(updateStateData(x));
            }}
          />
        ))}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={{marginBottom: normalize(8)}}>
          <Text
            style={{
              fontSize: fontSize(13),
              fontWeight: 500,
              color: '#000',
            }}>
            Order Summary
          </Text>
        </View>
        <View style={styles.column}>
          <Text
            style={{
              fontSize: fontSize(13),
              fontWeight: 500,
              color: '#000',
            }}>
            Sub Total :
          </Text>
          <Text
            style={{
              fontSize: fontSize(13),
              fontWeight: 500,
              color: '#000',
            }}>
            {totalPrice}
          </Text>
        </View>
        <View style={styles.column}>
          <Text
            style={{
              fontSize: fontSize(13),
              fontWeight: 500,
              color: '#000',
            }}>
            Total Product :
          </Text>
          <Text
            style={{
              fontSize: fontSize(13),
              fontWeight: 500,
              color: '#000',
            }}>
            {totalQuantity} Product
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ButtonPrimary title="Roccess order" />
          <ButtonPrimary title="Cancel" background="transparent" color="#000" />
        </View>
      </View>
      <Modal
        isVisible={mdlAdd}
        backdropColor="transparent"
        onBackdropPress={() => setMdlAdd(false)}
        onDismiss={() => setMdlAdd(false)}>
        <ModalNewItem closeModal={() => setMdlAdd(false)} />
      </Modal>
      <Modal
        isVisible={mdlDelete}
        backdropColor="transparent"
        onBackdropPress={() => setMdlDelete(false)}
        onDismiss={() => setMdlDelete(false)}>
        <ModalDelete closeModal={() => setMdlDelete(false)} />
      </Modal>
    </Layout>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    width: normalize(360),
    height: normalize(149),
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    padding: 16,
  },
  column: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: normalize(8),
  },
});
