import {a, p, div, button} from './../dom';

export default function(store) {
  let el = null;

  const buttonClick = (event) => {
    event.preventDefault();
    store.dispatch({name:'INCREMENT'});
    console.log(store.getState());
  };

  const render = (store) => {
    const counter = store.getState().counterState.counter;
    return div({id: 'app'},
      a({className: 'hello'}, 'Hello World'),
      p(`Counter: ${counter}`),
      button({onclick: buttonClick}, "Click me")
    );
  };

  const update = (prev) => {
    const el = render(store);

    if (!el.isEqualNode(prev)) {
      prev.parentElement.replaceChild(el, prev);
    }

    return el;
  };

  el = render(store);
  store.subscribe(() => {
    el = update(el);
  });

  return el;
}
