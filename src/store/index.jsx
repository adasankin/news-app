import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { newsReducer } from './reducer';

const rootReducer = combineReducers({
  news: newsReducer,
})

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
);

export default store;