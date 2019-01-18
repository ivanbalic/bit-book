import React, { Component } from 'react';

import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

import './LoginAndRegister.css';


class LoginAndRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoginTabActive: true

        }
    }


    onRegisterTabSelect = () => {
        this.setState({ isLoginTabActive: false })
    }

    onLoginTabSelect = () => {
        this.setState({ isLoginTabActive: true })
    }


    render() {
        return (
            <>
                <div className="row m-5 p-4 element-bg radius">
                    <div className="col-5">
                        <h3>{this.state.isLoginTabActive ? "BitBook Login" : "BitBook Register"}</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="offset-1 col-6 border-l pl-5">
                        <nav className="nav nav-pills nav-justified row px-3">
                            <p className={this.state.isLoginTabActive ? "nav-item nav-link button-active col-6" : "nav-item nav-link col-6"} onClick={this.onLoginTabSelect}>Login</p>
                            <p className={this.state.isLoginTabActive ? "nav-item nav-link col-6" : "nav-item nav-link button-active col-6"} onClick={this.onRegisterTabSelect}>Register</p>
                        </nav>

                        {this.state.isLoginTabActive ? <Login /> : <Register />}
                    </div>
                </div>
            </>

        )
    }
}


export default LoginAndRegister;
