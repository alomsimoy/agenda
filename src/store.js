export default class Store {
  constructor(reducer) {
    this.reducer = reducer;
    this.listeners = [];
    this.state = [{}];
    this.dispatch({name:'INIT'});
  }

  getState() {
    return this.state[this.state.length - 1];
  }

  dispatch(action) {
    this.state.push(this.reducer(this.getState(), action));
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return listener;
  }

  unsubscribe(listener) {
    const index = this.listeners.indexOf(listener);
    this.listeners.slice(index, 1);
  }
}

