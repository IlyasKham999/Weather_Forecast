import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import Styles from './styles';

export default function InputSearchCity({setCity}) {
  const [newCity, setNewSity] = useState('');
  const changeNewCitytHandler = () => {
    setCity(prev => newCity);
  };
  return (
    <View>
      <TextInput
        placeholder="Введите город"
        style={Styles.InputSearch}
        onChangeText={setNewSity}
        onEndEditing={changeNewCitytHandler}
      />
    </View>
  );
}
