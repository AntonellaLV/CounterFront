import { createStore } from 'redux';

// Reducer
const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      };
    case 'RESET':
      return {
        ...state,
        counter: 0
      };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

export default store;
