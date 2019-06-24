import React, { Component } from "react";

import { Loader } from "../../../components/Loader/Loader";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      username: "",
      password: ""
    };
  }

  render() {
    const { name, email, username, password } = this.state;
    const {
      message,
      isLoading,
      messageClass,
      handleFormChange,
      handleRegistration
    } = this.props;
    return (
      <div className="col-md-9 col-lg-8 mx-auto">
        <h3 className="login-heading mb-4">Register</h3>
        <div>
          <div className="form-label-group">
            <input
              required
              autoFocus
              type="text"
              id="username"
              value={username}
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              onChange={({ target }) =>
                this.setState({ username: target.value })
              }
            />
            <label htmlFor="username">Username</label>
          </div>

          <div className="form-label-group">
            <input
              required
              id="name"
              type="text"
              value={name}
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter full name"
              onChange={({ target }) => this.setState({ name: target.value })}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-label-group">
            <input
              required
              id="email"
              type="email"
              value={email}
              className="form-control"
              placeholder="Enter email"
              aria-describedby="emailHelp"
              onChange={({ target }) => this.setState({ email: target.value })}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-label-group">
            <input
              required
              id="password"
              type="password"
              value={password}
              className="form-control"
              placeholder="Password"
              onChange={({ target }) =>
                this.setState({ password: target.value })
              }
            />
            <label htmlFor="password">Password</label>
          </div>

          <button
            type="submit"
            onClick={() => handleRegistration(email, username, password, name)}
            className="btn btn-lg button-active btn-block btn-login text-uppercase font-weight-bold mb-2"
          >
            {isLoading ? <Loader className="white" /> : "Register"}
          </button>
          <div className="text-center">
            <small id="emailHelp" className={`form-text text-${messageClass}`}>
              {message}
            </small>
            <span className="small item-link" onClick={handleFormChange}>
              Login
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export { RegisterForm };
