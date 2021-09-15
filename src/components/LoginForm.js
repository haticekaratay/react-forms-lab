import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  setUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  setPassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit =(event) => {
    event.preventDefault()
    if(this.state.username && this.state.password ){
      this.props.handleLogin(this.state)
    }
  }

  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.setUsername} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.setPassword} id="password" name="password" type="password" />
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
