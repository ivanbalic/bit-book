import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FeedPage from './pages/FeedPage';
import PeoplePage from './pages/PeoplePage/PeoplePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SinglePostPage from './pages/SinglePostPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import LoginAndRegister from './pages/LoginAndRegister/LoginAndRegister';

import './App.css';
import { loginService } from '../services/login-service/login-service';

const App = () => {

  const loggedContent = () => {
    return (
      <>
        <Header />
        <main className='container'>
          <div className='row'>
            <Switch>
              <Route path='/post-details/:postType/:postId' component={SinglePostPage} />
              <Route path='/profile/:userId' component={ProfilePage} />
              <Route path='/people' component={PeoplePage} />
              <Route path='/feed' component={FeedPage} />
              <Route path='/' component={FeedPage} />
            </Switch>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      {
        loginService.isLoggedIn() ? 
        loggedContent() :
        <Route path='/' component={LoginAndRegister} />
      }
    </>
  );
}

export { App };
