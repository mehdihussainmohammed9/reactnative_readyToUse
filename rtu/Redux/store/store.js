import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import {persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import thunk from 'redux-thunk';
import reducer, {initial} from '../reducers/userReducer';
const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  whitelist: ['userName'], //  which state you want to persist
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);
export default store;
