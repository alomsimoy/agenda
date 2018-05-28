import {view} from './../View';
import {a, p, div, button} from './dom';
import inner from './inner';

export default view((store) => {
  const buttonClick = (event) => {
    event.preventDefault();
    store.dispatch({name:'INCREMENT'});
    console.log(store.getState());
  };

  const counter = store.getState().counterState.counter;
  return div({id: 'app'},
    a({className: 'hello'}, 'Hello World'),
    p(`Counter: ${counter}`),
    inner(store),
    button({onclick: buttonClick}, "Click me")
  );
});

