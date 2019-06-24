import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { LoginForm } from "./LoginForm/LoginForm";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import { loginCommunicator } from "../../../communicators/LoginCommunicator/LoginCommunicator";
import { registerCommunicator } from "../../../communicators/RegisterCommunicator/RegisterCommunicator";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageClass: "",
      isLoading: false,
      isLoginForm: true
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
  }

  handleLogin(username, password) {
    const payload = {
      username,
      password
    };
    this.setState({ isLoading: true });
    loginCommunicator
      .login(payload)
      .then(sessionId => {
        sessionStorage.setItem("sessionId", sessionId);
        window.location.reload();
      })
      .catch(({ message }) =>
        this.setState({ message: message, isLoading: false })
      );
  }

  handleRegistration(email, username, password, name) {
    const payload = {
      name,
      email,
      username,
      password
    };
    registerCommunicator
      .register(payload)
      .then(({ message }) =>
        this.setState({ message, messageClass: "success" })
      )
      .catch(({ message }) =>
        this.setState({ message, messageClass: "danger" })
      );
  }

  render() {
    const { isLoading, message, messageClass, isLoginForm } = this.state;
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  {isLoginForm ? (
                    <LoginForm
                      message={message}
                      isLoading={isLoading}
                      handleLogin={this.handleLogin}
                      handleFormChange={() =>
                        this.setState({ isLoginForm: false, message: "" })
                      }
                    />
                  ) : (
                    <RegisterForm
                      message={message}
                      isLoading={isLoading}
                      messageClass={messageClass}
                      handleRegistration={this.handleRegistration}
                      handleFormChange={() =>
                        this.setState({ isLoginForm: true, message: "" })
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);
