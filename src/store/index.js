import { createStore } from 'redux';
import reducer from '../reducers/index';
import DevTools from '../DevTools';

const store = createStore(
  reducer,
  DevTools.instrument()
);

export default store;


