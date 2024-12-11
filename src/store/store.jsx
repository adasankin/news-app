import { createStore } from 'redux';
import { newsReducer } from './reducer';

const store = createStore(newsReducer);

export default store;