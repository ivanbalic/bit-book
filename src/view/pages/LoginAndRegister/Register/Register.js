import React, { Component } from 'react';
import { registerService } from '../../../../services/register-service/register-service';



class Register extends Component {
    constructor(props) {
        super(props);


        this.state = {
            usernameInput: '',
            passwordInput: '',
            emailInput: '',
            fullNameInput: '',
            registerStatus: false,
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
    getEmailValue = (event) => {
        let stateObj;
        stateObj = {
            emailInput: event.target.value,
        }

        this.setState(stateObj)
    }
    getFullName = (event) => {
        let stateObj;

        stateObj = {
            fullNameInput: event.target.value,
        }

        this.setState(stateObj)
    }

    registerStatusCheck = () => {
        this.setState({
            registerStatus: true,
        });
    }




    onRegisterHandler = () => {
        const payload = {
            username: this.state.usernameInput,
            password: this.state.passwordInput,
            name: this.state.fullNameInput,
            email: this.state.emailInput,
        }

        console.log(payload);


        registerService.registerFetch(payload)
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    console.log(response);

                    this.registerStatusCheck();
                }
                return response.json();
            }).then((response) => {
                console.log(response);
            })
    }




    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="username" >Username</label>
                    <input type="text" onChange={this.getUsernameValue} className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label htmlFor="fullname" >FullName</label>
                    <input type="text" onChange={this.getFullName} className="form-control" id="fullname" aria-describedby="emailHelp" placeholder="Enter full name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" >Email address</label>
                    <input type="email" onChange={this.getEmailValue} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password" >Password</label>
                    <input type="password" onChange={this.getPasswordValue} className="form-control" id="password" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary col-12" onClick={this.onRegisterHandler}>Register</button>
                <small id="emailHelp" className="form-text text-muted">{this.state.registerStatus ? 'Succses! You can login now!' : ''}</small>
            </div>
        )
    }
}

export default Register;