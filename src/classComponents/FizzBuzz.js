import React, { Component } from 'react';

export default class FizzBuzz extends Component {
  state = {
    count: 1,
  };

  handleDecrement = () => {
    if (this.state.count > 1) {
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    }
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>
          React Fizz Buzz <hr />
        </h1>
        <p>
          Counting Incrementally, replacing any number divisible by three with
          the word "fizz", and any number divisible by five with the word
          "buzz".
        </p>
        <h2>
          {this.state.count % 15 === 0
            ? 'FizzBuzz'
            : this.state.count % 3 === 0
            ? 'Fizz'
            : this.state.count % 5 === 0
            ? 'Buzz'
            : this.state.count}
        </h2>
        <button onClick={this.handleDecrement}> - </button>
        <button onClick={this.handleIncrement}> + </button>
      </div>
    );
  }
}
