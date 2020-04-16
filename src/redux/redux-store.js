import {combineReducers, createStore} from 'redux';
import reducerTemplate from './reducer-template';
import cities from './cities';
import headerReducer from './header-reducer';


const reducers = combineReducers({
  reducerTemplate,
  cities,
  headerReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
