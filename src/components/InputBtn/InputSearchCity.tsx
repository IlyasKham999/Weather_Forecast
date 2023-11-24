import React, {useState} from 'react';
import Styles from './styles';
import {Input, Stack} from 'native-base';
import setAsyncStorage from '../../utils/setAsyncStorage';

export default function InputSearchCity({setCity}) {
  const [newCity, setNewSity] = useState('');

  const changeNewCitytHandler = () => {
    setCity(prev => newCity);
    setAsyncStorage('newCity', newCity);
  };

  return (
    <Stack w="100%" maxW="380px" mx="auto" style={Styles.InpContainer}>
      <Input
        color="muted.900"
        variant="rounded"
        placeholder="Введите город"
        style={Styles.InputSearch}
        onChangeText={setNewSity}
        onEndEditing={changeNewCitytHandler}
      />
    </Stack>
  );
}
