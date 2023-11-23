import {Text, View, Image} from 'react-native';
import React from 'react';
import Styles from './styles';

const RenderBlockWeather = ({date, maxtemp_c, mintemp_c, icon, text}: any) => {
  return (
    <View style={{borderBlockColor: '#000', borderWidth: 4, marginBottom: 10}}>
      <Text style={Styles.WeatherDataFetcher}>
        {new Date(date).toLocaleDateString('ru-RUS', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        })}
      </Text>
      <Text style={Styles.WeatherDataFetcher}>
        {maxtemp_c} °C ..... {mintemp_c} °C
      </Text>
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: `https:${icon}`,
        }}
      />
      <Text style={Styles.WeatherDataFetcher}>{text}</Text>
    </View>
  );
};

export default RenderBlockWeather;
