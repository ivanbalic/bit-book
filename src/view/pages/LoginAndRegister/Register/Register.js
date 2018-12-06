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
        console.log(this.state)
        return (
            <div>
                <div class="form-group">
                    <label for="exampleInputEmail1" >Username</label>
                    <input type="text" onChange={this.getUsernameValue} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1" >FullName</label>
                    <input type="text" onChange={this.getFullName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1" >Email address</label>
                    <input type="email" onChange={this.getEmailValue} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" >Password</label>
                    <input type="password" onChange={this.getPasswordValue} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" class="btn btn-primary col-12" onClick={this.onRegisterHandler}>Register</button>
                <small id="emailHelp" class="form-text text-muted">{this.state.registerStatus ? 'Succses! You can login now!' : ''}</small>
            </div>
        )
    }
}

export default Register;