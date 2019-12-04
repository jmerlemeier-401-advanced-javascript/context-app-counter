import React from 'react';
import Counter from './components/counter/counter.js';

import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Counter />
      </>
    );
  }
}
