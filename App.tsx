import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import WeatherDataFetcher from './src/components/WeatherDataFetcher/WeatherDataFetcher';
import InputSearchCity from './src/components/InputBtn/InputSearchCity';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  const [city, setCity] = useState('Москва');

  return (
    <>
      <Provider store={store}>
        <View style={{height: '100%'}}>
          <ScrollView>
            <InputSearchCity setCity={setCity} />
            <WeatherDataFetcher city={city} />
          </ScrollView>
        </View>
      </Provider>
    </>
  );
};

export default App;
