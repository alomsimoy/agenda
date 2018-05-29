import {a, p, div, button} from './dom';
import inner from './inner';
// import store from './../store';

export default (store) => {
  const buttonClick = (event) => {
    event.preventDefault();
    store.dispatch({name:'INCREMENT'});
  };

  const counter = store.getState().counterState.counter;
  return div({id: 'app'},
    a({className: 'hello'}, 'Hello World'),
    inner(store),
    button({onclick: buttonClick}, "Click me")
  );
}

