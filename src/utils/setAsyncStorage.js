import AsyncStorage from '@react-native-community/async-storage';

const setAsyncStorage = (key, value) => {
  AsyncStorage.setItem(key, value)
    .then(() => console.log('Data saved'))
    .catch(error => console.log(error));
};

export default setAsyncStorage;
