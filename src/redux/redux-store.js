import {combineReducers, createStore} from 'redux';
import reducerTemplate from './reducer-template';
import cities from './cities';


let reducers = combineReducers({
  reducerTemplate,
  cities,
});

let store = createStore(reducers);

window.store = store;

export default store;
