import React, {useEffect, useState} from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import axios from 'axios';
import WeatherDataFetcher from './src/components/WeatherDataFetcher/WeatherDataFetcher';
import InputSearchCity from './src/components/InputBtn/InputSearchCity';

const App = () => {
  const [city, setCity] = useState('Москва');

  return (
    <>
      <View style={{height: '100%'}}>
        <ScrollView>
          <InputSearchCity setCity={setCity} />
          <WeatherDataFetcher city={city} />
        </ScrollView>
      </View>
    </>
  );
};

export default App;
