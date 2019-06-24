import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "../Login/LoginPage";
import { FeedPage } from "../Feed/FeedPage";
import { ErrorPage } from "../Error/ErrorPage";
import { AboutPage } from "../About/AboutPage";
import { PeoplePage } from "../People/PeoplePage";
import Header from "../../components/Header/Header";
import { ProfilePage } from "../Profile/ProfilePage";
import { Footer } from "../../components/Footer/Footer";
import { SinglePostPage } from "../SinglePost/SinglePostPage";

import "./App.css";

const App = () => {
  return sessionStorage.getItem("sessionId") ? (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/post-details" component={SinglePostPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/people" component={PeoplePage} />
        <Route path="/error" component={ErrorPage} />
        <Route path="/feed" component={FeedPage} />
        <Route path="/" component={FeedPage} />
      </Switch>
      <Footer />
    </Fragment>
  ) : (
    <Route path="/" component={LoginPage} />
  );
};

export { App };
