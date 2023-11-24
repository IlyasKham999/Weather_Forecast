import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import WeatherDataFetcher from './src/components/WeatherDataFetcher/WeatherDataFetcher';
import InputSearchCity from './src/components/InputBtn/InputSearchCity';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NativeBaseProvider} from 'native-base';
import {LinearGradient} from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
  const [city, setCity] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('newCity');
        if (value !== null) {
          setCity(value);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Provider store={store}>
        <LinearGradient
          colors={['rgb(251, 207, 232)', 'rgb(129, 140, 248)']}
          style={{flex: 1}}>
          <NativeBaseProvider>
            <ScrollView>
              <InputSearchCity setCity={setCity} />
              <WeatherDataFetcher city={city} />
            </ScrollView>
          </NativeBaseProvider>
        </LinearGradient>
      </Provider>
    </>
  );
};

export default App;
