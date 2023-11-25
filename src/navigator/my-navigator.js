import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import home from '../screens/home';
import input from '../screens/input';
import {usePostnoAuth} from '../helper/request';
import {updateUserToken} from '../reducers/authReducer';

const Stack = createNativeStackNavigator();

export default function () {
  const dispatch = useDispatch();

  //post Data Login
  const [func_login, res_login] = usePostnoAuth('token');

  // function login
  function do_login() {
    let par = {
      username: 'admin',
      password: 'admin',
      grant_type: 'client_credentials',
      client_id: 'profes-api',
      client_secret: 'P@ssw0rd',
    };

    func_login(par);
  }

  useEffect(() => {
    do_login();
  }, []);

  useEffect(() => {
    if (res_login.success) {
      dispatch(
        updateUserToken({
          field: 'access_token',
          value: res_login.success_res.access_token,
        }),
      );
    }
  }, [res_login.success]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="input" component={input} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
