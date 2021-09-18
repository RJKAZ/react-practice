import React from 'react'


const Counter = (props) => {
    return (
      <div>
        <button onClick={props.handleClick}>CLICK ME</button>
        <h1>{props.text}</h1>
      </div>
    );
  };

  class CounterClass extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 1
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState({
        count: this.state.count + 1
      });
    }
    render() {
      return (
        <div>
          <Counter handleClick={this.handleClick} text={this.state.count} />
        </div>
      );
    }
  }

  export default CounterClass