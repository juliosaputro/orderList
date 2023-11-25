import {combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import listdataReducer from '../reducers/listdataReducer';
import listitemReducer from '../reducers/listitemReducer';
import actionReducer from '../reducers/actionReducer';

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV === `development`) {
  const {logger} = require(`redux-logger`);
  middlewares.push(logger);
}

const appReducer = combineReducers({
  authReducer,
  listdataReducer,
  listitemReducer,
  actionReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

export const persistor = persistStore(store);
