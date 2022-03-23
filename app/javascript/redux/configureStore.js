import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { thingReducer } from './things/things';

const reducer = combineReducers({
  thingReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;