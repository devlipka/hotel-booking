import {combineReducers, createStore} from 'redux';
import reducerTemplate from './reducer-template';


let reducers = combineReducers({
    reducerTemplate,
});

let store = createStore(reducers);

window.store = store;

export  default store;