import React, { Component } from 'react';

import Login from './Login/Login';
import Register from './Register/Register';


class LoginAndRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogin: true

        }
    }


    registerHandler = () => {
        this.setState({ isLogin: false })
    }



    render() {
        return (
            <>
                <div className="row mt-5">
                    <div className="col-5">
                        <h3>{this.state.isLogin ? "BitBook Login" : "BitBook Register"}</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="offset-1 col-6">
                        <nav class="nav nav-pills nav-justified row mb-4 p-3">
                            <a className={this.state.isLogin ? "nav-item nav-link active col-6" : "nav-item nav-link col-6"} href="#" onClick={this.loginHandler}>Login</a>
                            <a className={this.state.isLogin ? "nav-item nav-link col-6" : "nav-item nav-link active col-6"} href="#" onClick={this.registerHandler}>Register</a>
                        </nav>

                        {
                            this.state.isLogin ? <Login loginStatusCallback={this.props.loginStatusCallback} /> : <Register />
                        }
                    </div>
                </div>
            </>

        )
    }
}


export default LoginAndRegister;
