import React, { Component } from 'react';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import LoginAndRegister from './pages/LoginAndRegister/LoginAndRegister';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }


  loginStatusCallback = () => {
    this.setState({
      isLoggedIn: true,
    });
  }


  render() {

    if (!this.state.isLoggedIn) {
      return <LoginAndRegister loginStatusCallback={this.loginStatusCallback} />;

    }

    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
