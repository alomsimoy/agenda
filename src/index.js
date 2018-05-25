import Store from './store';
import reducer from './reducers';

const store = new Store(reducer);

console.log(store.getState());
store.dispatch({name:'INCREMENT'});
store.dispatch({name:'INCREMENT'});
console.log(store.getState());


