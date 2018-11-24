import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import merge from 'deepmerge'

import { loadLocalState } from '../store/localstorage';

export const sagaMiddleware = createSagaMiddleware();

const initState = {
    version: 0,
    ui: {
      scientist: "curie",
      topic: "sm",
      messages: []
    }
};


function reduceState(state, action) {
  if (action.type === 'SET_STATE')
    return action.payload.value;
  else if (action.type === 'SET_SCIENTIST')
    return { ...state, ui: { ...state.ui, scientist: action.payload.value } }
    else if (action.type === 'SET_TOPIC')
      return { ...state, ui: { ...state.ui, topic: action.payload.value } }
  return state;
}

// FIXME: Replace with saga task?
const state = loadLocalState();

let store = createStore(reduceState, merge(initState, state),
                        applyMiddleware(sagaMiddleware));

export default store;
