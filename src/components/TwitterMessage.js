import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  change = (event) => {
    this.setState({
      input: event.target.value
    }, console.log(event.target.value))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.change} value={this.state.input}/>
        <h3>Characters left: {this.props.maxChars - this.state.input.length} </h3>
      </div>
    );
  }
}

export default TwitterMessage;
