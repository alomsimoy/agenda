import Store from './store';
import reducer from './reducers';
import app from './components/app.js';

const store = new Store(reducer);

document.body.appendChild(app(store));

