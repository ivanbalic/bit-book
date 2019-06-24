import React, { Component } from "react";

import { Loader } from "../../../components/Loader/Loader";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    const { username, password } = this.state;
    const { isLoading, handleLogin, message, handleFormChange } = this.props;
    return (
      <div className="col-md-9 col-lg-8 mx-auto">
        <h3 className="login-heading mb-4">Welcome back!</h3>
        <div>
          <div className="form-label-group">
            <input
              required
              autoFocus
              type="text"
              id="username"
              value={username}
              placeholder="Username"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={({ target }) => {
                this.setState({ username: target.value });
              }}
            />
            <label htmlFor="username">Username</label>
          </div>

          <div className="form-label-group">
            <input
              required
              id="password"
              type="password"
              value={password}
              placeholder="Password"
              className="form-control"
              onChange={({ target }) => {
                this.setState({ password: target.value });
              }}
            />
            <label htmlFor="password">Password</label>
          </div>

          <button
            type="submit"
            onClick={() => handleLogin(username, password)}
            className="btn btn-lg button-active btn-block btn-login text-uppercase font-weight-bold mb-2"
          >
            {isLoading ? <Loader className="white" /> : "Login"}
          </button>
          <div className="text-center">
            <small className="form-text text-danger">{message}</small>
            <span className="small item-link" onClick={handleFormChange}>
              Haven't register yet?
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export { LoginForm };
