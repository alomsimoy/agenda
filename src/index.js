import Store from './store';
import reducer from './reducers';
import app from './components/app.js';

const store = new Store(reducer);
// const update = () => {
  // const appLayout = document.createElement('app-layout');
  // appLayout.store(store);
  // document.querySelector('body').appendChild(appLayout);
  document.body.appendChild(app(store));
// }
// store.subscribe(update);

// console.log(store.getState());
store.dispatch({name:'INCREMENT'});
store.dispatch({name:'INCREMENT'});
store.dispatch({name:'INCREMENT'});
store.dispatch({name:'INCREMENT'});
store.dispatch({name:'INCREMENT'});
// console.log(store.getState());




