import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  WeatherDataFetcher: {
    marginHorizontal: 20,
    marginTop: 40,
    fontSize: 25,
    flex: 1,
  },
  city: {
    fontSize: 45,
  },
  RenderBlockWeather: {
    borderBlockColor: '#000',
    borderRadius: 10,
    marginTop: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flex: 1,
    alignItems: 'center',
  },
  mainPage: {
    flex: 1,
    alignItems: 'center',
  },
  textInBLockWether: {
    fontSize: 25,
    padding: 20,
  },
  Icons: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(170, 170, 170, 0.5)',
    borderRadius: 10,
  },
});

export default Styles;
