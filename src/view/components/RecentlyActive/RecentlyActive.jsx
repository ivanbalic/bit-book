import { Link } from "react-router-dom";
import React, { Component, Fragment } from "react";

import { Loader } from "../Loader/Loader";
import UserItem from "./UserItem/UserItem";
import { getRecentlyActive } from "../../../shared/helpers";
import { userCommunicator } from "../../../communicators/UserCommunicator/UserCommunicator";

class RecentlyActive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }

  componentDidMount() {
    userCommunicator
      .getUsers()
      .then(users => this.setState({ users: getRecentlyActive(users) }));
  }

  render() {
    const { users } = this.state;
    const { withLink } = this.props;
    return (
      <div className="card my-4 shadow sticky-first">
        <h5 className="card-header button-active">Recently Active</h5>
        <div className="card-body bg-light">
          {users ? (
            <Fragment>
              {users.map((user, i) => (
                <UserItem user={user} key={i} />
              ))}
              {withLink ? (
                <Link
                  to="/people"
                  className="text-center text-muted mx-auto d-block"
                >
                  See more..
                </Link>
              ) : null}
            </Fragment>
          ) : (
            <Loader className="blue" />
          )}
        </div>
      </div>
    );
  }
}

export { RecentlyActive };
