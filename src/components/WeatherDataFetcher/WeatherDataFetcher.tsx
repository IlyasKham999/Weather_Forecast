import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text, Image, ScrollView} from 'react-native';
import Styles from './styles';
import RenderBlockWeather from './RenderBlockWeather';

const WeatherDataFetcher = ({city}) => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherDataTreeDay, setWeatherDataTreeDay] = useState([]);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
          params: {q: city, lang: 'ru', days: '3'},
          headers: {
            'X-RapidAPI-Key':
              'a4cace62a8msh122e8320e49c2bap1be0a2jsn8b9dddd42e60',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
          },
        };
        const response = await axios.request(options);
        setWeatherData(prev => response.data);
        setWeatherDataTreeDay(prev => response.data.forecast.forecastday);
      } catch (error) {
        console.log(error);
      }
    };

    getWeatherData();
  }, [city]);

  return (
    <View style={Styles.WeatherDataFetcher}>
      {weatherData ? (
        <View>
          <Text style={Styles.WeatherDataFetcher}>
            {weatherData.location.name}
          </Text>
          <Text style={Styles.WeatherDataFetcher}>
            Сегодня Ожидаеться Температура: {weatherData.current.temp_c} °C
          </Text>

          <Image
            style={{width: 100, height: 100}}
            source={{
              uri: `https:${weatherData.current.condition.icon}`,
            }}
          />
          <Text style={Styles.WeatherDataFetcher}>
            {weatherData.current.condition.text}
          </Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}

      {weatherDataTreeDay.map(el => {
        return (
          <View key={el.date_epoch}>
            <RenderBlockWeather
              date={el.date}
              maxtemp_c={el.day.maxtemp_c}
              mintemp_c={el.day.mintemp_c}
              icon={el.day.condition.icon}
              text={el.day.condition.text}
            />
          </View>
        );
      })}
    </View>
  );
};

export default WeatherDataFetcher;