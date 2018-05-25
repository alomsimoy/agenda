const defaultState = {
  counter: 0
}

export default function (state = defaultState, action) {
  switch (action.name) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'INIT':
      return defaultState;
    default:
      return state;
  }
}

