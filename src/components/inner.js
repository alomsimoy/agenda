import {p} from './dom';
//import store from './../store';

export default (store) => {
  const counter = store.getState().counterState.counter;
  return p(`Counter: ${counter}`);
};

