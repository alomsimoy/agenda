import Store from './store';
import reducer from './reducers';
import createApp from './createApp';
import app from './components/app.js';

const store = new Store(reducer);

createApp(document.body, app, store);

