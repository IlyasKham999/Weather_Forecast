import {Text, View, Image} from 'react-native';
import React from 'react';
import Styles from './styles';

const RenderBlockWeather = ({date, maxtemp_c, mintemp_c, icon, text}: any) => {
  return (
    <View style={Styles.RenderBlockWeather}>
      <Text style={Styles.textInBLockWether}>
        {new Date(date).toLocaleDateString('ru-RUS', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        })}
      </Text>
      <Text style={Styles.textInBLockWether}>
        {maxtemp_c} °C ..... {mintemp_c} °C
      </Text>
      <Image
        style={Styles.Icons}
        source={{
          uri: `https:${icon}`,
        }}
      />
      <Text style={Styles.textInBLockWether}>{text}</Text>
    </View>
  );
};

export default RenderBlockWeather;
