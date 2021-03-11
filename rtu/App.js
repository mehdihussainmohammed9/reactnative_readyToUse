import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Provider} from 'react-redux';
import store from './Redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import Testone from './screens/Testone';
let persistor = persistStore(store);

const App = () => {
  const [value, onChangeText] = React.useState('enter here ');

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View>
          <Testone />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;

// react-native run-android
