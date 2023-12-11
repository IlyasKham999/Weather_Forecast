import {DataActionTypes, DataState, DateAction} from '../../types/index';

const initialState: DataState = {
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

export const apiDataReducer = (state = initialState, action: DateAction) => {
  switch (action.type) {
    case DataActionTypes.SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.payload,
      };
    case DataActionTypes.SET_WEATHER_DATA_THREE_DAY:
      return {
        ...state,
        weatherDataTreeDay: action.payload,
      };
    default:
      return state;
  }
};
export const setWeatherData = (data: DataState) => ({
  type: DataActionTypes.SET_WEATHER_DATA,
  payload: data,
});

export const setWeatherDataThreeDay = (data: DataState) => ({
  type: DataActionTypes.SET_WEATHER_DATA_THREE_DAY,
  payload: data,
});
