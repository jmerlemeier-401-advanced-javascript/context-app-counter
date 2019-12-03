import React from 'react';

export const CounterContext = React.createContext();

class CounterProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement
    }
  }

  decrement = () => {
    let currentState = this.state.count;
    this.setState({count: (currentState)-1})
  }

  increment = () => {
   let currentState = this.state.count;
    this.setState({count: currentState+1})
  }

  render() {
    return(
      <CounterContext.Provider value={this.state}>
        {this.props.children}
      </CounterContext.Provider>
    )
  }
}

export default CounterProvider;