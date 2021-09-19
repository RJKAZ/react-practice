import React, { Component } from "react";

class ParentState extends Component {
    state = {
      text: "Click Me !"
    };
  
    // Function to update state
    handleUpdate = (newState) => {
      this.setState({ text: newState });
    };
  
    render() {
      return (
        <div>
          <Child
            text={this.state.text}
            // Passing a function to child
            updateState={this.handleUpdate}
          ></Child>
        </div>
      );
    }
  }
  
  class Child extends Component {
    render() {
      return (
        <button
          // Using parent props to update parent state
          onClick={() => this.props.updateState("Parent State Changed")}
        >
          {this.props.text}
        </button>
      );
    }
  }

  export default ParentState
  