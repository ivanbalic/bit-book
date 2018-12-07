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

                    return response.json();
                }
            })
            .then((response) => {
                console.log(response)
                sessionStorage.setItem('sessionId', response.sessionId);
                this.props.history.push('/profile');
            })
    }

    render() {
        console.log(this.state.errorMessage);

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

export default withRouter(Login);