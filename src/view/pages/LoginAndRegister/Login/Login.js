import React, { Component } from 'react';

import { loginService } from '../../../../services/login-service/login-service';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: '',
            passwordInput: '',
            errorMessage: '',
        }
    }

    getUsernameValue = (event) => {
        let stateObj;
        // if (!event.target.value.includes("http") && event.target.value.length >= 3 && !event.target.value.includes("<") && !event.target.value.includes("www")) {
        stateObj = {
            usernameInput: event.target.value,
        }
        // }
        // else {
        //     stateObj = {
        //         inputValue: event.target.value,

        //     }
        // }
        this.setState(stateObj);
    }

    getPasswordValue = (event) => {
        let stateObj;
        // if (!event.target.value.includes("http") && event.target.value.length >= 3 && !event.target.value.includes("<") && !event.target.value.includes("www")) {
        stateObj = {
            passwordInput: event.target.value,
        }
        // }
        // else {
        //     stateObj = {
        //         inputValue: event.target.value,

        //     }
        // }
        this.setState(stateObj)
    }

    onLoginHandler = () => {
        const payload = {
            username: this.state.usernameInput,
            password: this.state.passwordInput,
        }
        loginService.loginFetch(payload)
            .then((response) => {

                if (response.status >= 200 && response.status < 300) {

                    this.props.loginStatusCallback();
                }
                return response.json();
            }).then((response) => {

                sessionStorage.setItem('sessionId', response.sessionId);
            }
            );
    }

    render() {

        return (
            <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" onChange={this.getUsernameValue} />
                    <small id="emailHelp" className="form-text text-muted">{this.state.errorMessage}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.getPasswordValue} />
                </div>

                <button type="submit" className="btn btn-primary col-12" onClick={this.onLoginHandler}>Login</button>
            </div>
        )
    }
}

export default Login;