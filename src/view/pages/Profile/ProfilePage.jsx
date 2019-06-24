import React, { Component, Fragment } from "react";

import { EditProfile } from "./EditProfile/EditProfile";
import { Loader } from "../../components/Loader/Loader";
import { ProfileContent } from "./ProfileContent/ProfileContent";
import { userCommunicator } from "../../../communicators/UserCommunicator/UserCommunicator";

import "./ProfilePage.css";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null
    };
    this.loadProfile = this.loadProfile.bind(this);
  }

  loadProfile(userId) {
    userCommunicator.getSingleUser(userId).then(profile => {
      this.setState({
        profile,
        userId: userId
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.state.userId !== this.props.location.state.userId) {
      this.loadProfile(this.props.location.state.userId);
    }
  }

  componentDidMount() {
    this.loadProfile(this.props.location.state.userId);
  }

  render() {
    const { profile} = this.state;

    return (
      <Fragment>
        <img
          className="profile-cover container p-0"
          src={`https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80`}
          alt="cover"
        />
        <main className="container p-0">
          {profile ? (
            <Fragment>
              <ProfileContent profile={profile} />
              <EditProfile loadProfile={this.loadProfile} profile={profile} />
            </Fragment>
          ) : (
            <Loader className="blue" />
          )}
        </main>
      </Fragment>
    );
  }
}

export { ProfilePage };
