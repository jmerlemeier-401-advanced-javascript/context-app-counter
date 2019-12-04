import React from 'react';

import { CounterContext } from '../counter/counter-context';


class Decrementer extends React.Component {
  static contextType = CounterContext;

  render() {
    return (
      <>
        <button onClick={() => this.context.decrement()}>Decrement</button>
      </>
    )
  }
}

export default Decrementer;