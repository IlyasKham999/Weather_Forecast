import axios from 'axios';
import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import RenderBlockWeather from './RenderBlockWeather';
import {useDispatch, useSelector} from 'react-redux';
import {
  setWeatherData,
  setWeatherDataThreeDay,
} from '../../redux/reducers/apiDataReducer';
import Swiper from 'react-native-swiper';
import Styles from './styles';

const WeatherDataFetcher = ({city}) => {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weatherData);
  const weatherDataTreeDay = useSelector(state => state.weatherDataTreeDay);

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
        dispatch(setWeatherData(response.data));
        dispatch(setWeatherDataThreeDay(response.data.forecast.forecastday));
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
          <View style={Styles.mainPage}>
            <View style={Styles.containerCity}>
              <Text style={Styles.city}>{weatherData.location.name}</Text>
            </View>
            <Text style={Styles.WeatherDataFetcher}>
              Сегодня Ожидаеться: {weatherData.current.temp_c} °C
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
          <Swiper showsButtons={true} showsPagination={false} height={400}>
            {weatherDataTreeDay.map(el => {
              return (
                <View key={el.date_epoch} style={styles.slide}>
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
          </Swiper>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};
const styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export default WeatherDataFetcher;
