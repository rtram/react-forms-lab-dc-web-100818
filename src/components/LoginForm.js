import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password
    username.length > 0 && password.length > 0 ? this.props.onSubmit({username, password}) : null
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.onChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.onChange} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
