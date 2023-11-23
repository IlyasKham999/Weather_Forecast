import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState = {
  weatherData: {
    location: {name: 'Москва'},
    current: {
      temp_c: '-7',
      condition: {
        icon: 'https://cdn.weatherapi.com/weather/64x64/night/332.png',
        text: 'Умеренный снег',
      },
    },
  },
  weatherDataTreeDay: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WEATHER_DATA':
      return {
        ...state,
        weatherData: action.payload,
      };
    case 'SET_WEATHER_DATA_THREE_DAY':
      return {
        ...state,
        weatherDataTreeDay: action.payload,
      };
    default:
      return state;
  }
};
export const setWeatherData = data => ({
  type: 'SET_WEATHER_DATA',
  payload: data,
});

export const setWeatherDataThreeDay = data => ({
  type: 'SET_WEATHER_DATA_THREE_DAY',
  payload: data,
});
const store = createStore(weatherReducer);
export default store;
