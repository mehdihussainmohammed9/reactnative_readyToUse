import React, {useState} from 'react';

import {Text, View, TextInput, Button} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {storeUserData, clearData} from '../Redux/action/userActions';
const Testone = () => {
  const [value, onChangeText] = React.useState('Enter Here');
  const {userName} = useSelector((store) => store);
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const storeData = () => {
    dispatch(storeUserData(value));
  };
  return (
    <View>
      <TextInput
        style={{margin: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Button
        title="Save to Redux"
        onPress={() => {
          storeData();
        }}></Button>

      <Text style={{margin: 40, borderColor: 'gray', borderWidth: 1}}>
        Redux Data: {userName}
      </Text>

      <Button
        title="Clear to Redux"
        onPress={() => {
          dispatch(clearData());
        }}></Button>
    </View>
  );
};
export default Testone;
