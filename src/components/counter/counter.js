import React from 'react';

import { CounterContext } from './counter-context';

import Incrementer from '../incrementer';
import Decrementer from '../decrementer';


class Count extends React.Component {
  //this component is a consumer of the context 
  static contextType = CounterContext;

render () {
  return (
    <div className="container">
      <Decrementer />
      <span className="counter">{this.context.count}</span>
      <Incrementer />
    </div>
  );
}
};

export default Count;