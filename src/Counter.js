import React from 'react';
import { connect } from 'react-redux';

import { registerHandler } from './store.js';

import './Counter.css';


class Counter extends React.Component {
  render() {
    return <span className="Counter">
      <code>{this.props.count}</code>
      <button onClick={this.props.onClick}>+</button>
      (step: <input type="number"
        value={this.props.step}
        onChange={this.props.onStepChange} />)
    </span>;
  }
}

// Action creators
const inc = () => ({ type: 'INC' });
const setStep = (step) => ({ type: 'STEP', payload: step });

// Action Reducers
registerHandler('INC', (state) => ({ counter: state.counter + state.step }));
registerHandler('STEP', (state, step) => ({ step: step || (state.step > 0 ? -1 : 1) }));

// Container
const CounterContainer = connect(
  state => ({ count: state.counter, step: state.step }),
  dispatch => ({
    onClick: () => dispatch(inc()),
    onStepChange: (event) => dispatch(setStep(+event.target.value)),
  }),
)(Counter);

export { CounterContainer as Counter };
