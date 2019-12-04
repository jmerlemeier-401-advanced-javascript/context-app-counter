import React from 'react';

import { CounterContext } from '../counter/counter-context';


class Incrementer extends React.Component {
  static contextType = CounterContext;

  render() {
    return (
      <>
        <button onClick={() => this.context.increment()}>Increment</button>
      </>
    )
  }
}

export default Incrementer;

