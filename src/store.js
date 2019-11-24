import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import searchReducer from './reducers';


import thunk from 'redux-thunk'

const reducers = combineReducers({
  search: searchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

export default store;