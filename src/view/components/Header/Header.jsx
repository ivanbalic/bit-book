import { Link, withRouter } from "react-router-dom";
import React, { Component } from "react";

import { userCommunicator } from "../../../communicators/UserCommunicator/UserCommunicator";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      userName: "Profile",
      userImg:
        "http://sg-fs.com/wp-content/uploads/2017/08/user-placeholder.png"
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    sessionStorage.clear();
  }

  componentDidMount() {
    userCommunicator
      .getProfile()
      .then(({ name, image, id }) =>
        this.setState({ userName: name, userImg: image, userId: id })
      );
  }

  render() {
    const { userName, userImg, userId } = this.state;
    return (
      <header className="container-fluid primary-color navbar-dark sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark primary-color container">
          <Link className="navbar-brand" to="/feed">
            <img
              src="https://i.imgur.com/Xa93F4x.png"
              alt="logo"
              className="logo mr-1"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item border-right border-primary">
                <span
                  className="nav-link py-0"
                  onClick={() =>
                    this.props.history.push({
                      pathname: "/profile",
                      state: {
                        userId
                      }
                    })
                  }
                >
                  <img
                    src={userImg}
                    alt="profile icon"
                    className="profile-icon rounded-circle bg-light"
                  />{" "}
                  {userName}
                </span>
              </li>
              <li className="nav-item border-right border-primary">
                <Link className="nav-link py-0" to="/feed">
                  <i className="fas fa-newspaper" /> Feed
                </Link>
              </li>
              <li className="nav-item border-right border-primary">
                <Link className="nav-link py-0" to="/people">
                  <i className="fas fa-users" /> People
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link py-0"
                  to={`/`}
                  onClick={this.handleLogout}
                >
                  <i className="fas fa-sign-out-alt" /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
