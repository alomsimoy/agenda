import counterReducer from './counter';

export default function (state, action) {
  return {
    counterState: counterReducer(state.counterState, action)
  };
};

