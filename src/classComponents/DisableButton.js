import React from "react";

class DisableButton extends React.Component {
  state = {
    email: ""
  };

  handleChange = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button disabled={this.state.email.length < 1}>Submit</button>
      </div>
    );
  }
}

export default DisableButton