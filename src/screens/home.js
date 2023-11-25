import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import Layout from '../components/Layout';
import {fontSize, normalize} from '../utils/responsive';
import FormSearch from '../components/FormSearch';
import ButtonPrimary from '../components/ButtonPrimary';
import Listcomp from '../components/Listcomp';
import {useGet} from '../helper/request';
import {useDispatch, useSelector} from 'react-redux';
import {updateListData} from '../reducers/listdataReducer';
import {useNavigation} from '@react-navigation/native';
import {updateStates} from '../reducers/authReducer';

export default function () {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {authReducer} = useSelector(s => s);

  const [datas, setDatas] = useState([]);

  //get data
  const [fetch_list_data, res_list_data] = useGet();

  function fetch_data() {
    fetch_list_data({}, `Order/GetOrderList`);
  }

  useEffect(() => {
    if (authReducer.access_token.value !== '') {
      fetch_data();
    }
  }, [authReducer.access_token.value]);

  useEffect(() => {
    if (res_list_data.success) {
      dispatch(updateListData(res_list_data.success_res));
      setDatas(res_list_data.success_res);
    }
  }, [res_list_data.success]);

  return (
    <Layout title="Sales Order List">
      <FormSearch />
      <View
        style={{
          height: normalize(40),
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: fontSize(20),
            fontWeight: 500,
            color: '#000',
          }}>
          Order List
        </Text>
        <Text
          style={{
            fontSize: fontSize(11),
            fontWeight: 500,
            color: '#000',
          }}>
          Total Items : 50
        </Text>
      </View>
      <View>
        <ButtonPrimary title="Add" />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={res_list_data.loading}
            onRefresh={() => fetch_data()}
          />
        }>
        {datas.map((x, y) => (
          <Listcomp
            key={y}
            name={x.CustomerName}
            orderNo={x.OrderNo}
            dateorder={x.OrderDate}
            onPress={() => {
              navigation.navigate('input');
              dispatch(updateStates(x.OrderId));
            }}
          />
        ))}
      </ScrollView>
    </Layout>
  );
}
