import {p} from './dom';
import {view} from './../View';

export default view((store) => {
  const counter = store.getState().counterState.counter;
  return p(`Counter: ${counter}`);
});

