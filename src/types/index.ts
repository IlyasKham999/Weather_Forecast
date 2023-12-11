export enum DataActionTypes {
  SET_WEATHER_DATA = 'SET_WEATHER_DATA',
  SET_WEATHER_DATA_THREE_DAY = 'SET_WEATHER_DATA_THREE_DAY',
}
export interface DataState {
  weatherData: {
    location: {
      name: string;
    };
    current: {
      temp_c: string;
      condition: {
        icon: string;
        text: string;
      };
    };
  };
  weatherDataTreeDay: any[];
}

export interface DateAction {
  type: string;
  payload?: any;
}
