import { createStore } from 'redux';


const initialState = {
  counter: 0,
  step: 1,
};

const handlers = {};

export const registerHandler = (key, handler) => handlers[key] = handler;

const reducer = (state = initialState, action) => {
  if (handlers.hasOwnProperty(action.type))
    return { ...state, ...handlers[action.type](state, action.payload) };

  console.warn(`Reducer did not handle action "${action.type}"`);
  return state;
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
