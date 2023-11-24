import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {apiDataReducer} from './reducers/apiDataReducer';

const store = createStore(apiDataReducer);
export default store;
