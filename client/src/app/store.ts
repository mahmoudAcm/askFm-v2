import { createStore } from '@reduxjs/toolkit';
import MainReducer from './reducers/main';

const store = createStore(MainReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
