import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { loginService } from '../../../../services/login-service/login-service';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: '',
            passwordInput: '',
            errorMessage: '',
            reqStatus: false,
        }
    }

    getUsernameValue = (event) => {
        let stateObj;
        stateObj = {
            usernameInput: event.target.value,
        }

        this.setState(stateObj);
    }

    getPasswordValue = (event) => {
        let stateObj;
        stateObj = {
            passwordInput: event.target.value,
        }

        this.setState(stateObj)
    }

    onLoginHandler = () => {
        const payload = {
            username: this.state.usernameInput,
            password: this.state.passwordInput,
        }
        loginService.loginFetch(payload)
            .then((response) => {
                console.log(response);

                if (response.status >= 200 && response.status < 300) {
                    this.setState({
                        reqStatus: true,
                    });
                }
                return response.json();
            })
            .then((response) => {
                console.log(response);

                if (this.state.reqStatus === true) {
                    
                    sessionStorage.setItem('sessionId', response.sessionId);
                    this.props.history.push('/feed');
                } else {
                    this.setState({
                        errorMessage: response.error.message,
                    })
                }
            })
    }

    render() {
        console.log(this.state.errorMessage);

        return (
            <div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Username" onChange={this.getUsernameValue} />
                    <small id="emailHelp" className="form-text text-muted">{this.state.errorMessage}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.getPasswordValue} />
                </div>

                <button type="submit" className="btn btn-primary col-12" onClick={this.onLoginHandler}>Login</button>
            </div>
        )
    }
}

export default withRouter(Login);