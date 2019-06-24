import React, { Component, Fragment } from "react";

import { userCommunicator } from "../../../../../communicators/UserCommunicator/UserCommunicator";

import "./FeedHeading.css";

class FeedHeading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
      userImg:
        "http://sg-fs.com/wp-content/uploads/2017/08/user-placeholder.png"
    };
  }

  componentDidMount() {
    userCommunicator
      .getSingleUser(this.state.post.userId)
      .then(({ image }) => this.setState({ userImg: image }));
  }

  render() {
    const { post, userImg } = this.state;
    return (
      <Fragment>
        <h5
          className="card-title item-link mb-0 fit-content"
          onClick={this.props.handleUserClick}
        >
          <img
            className="d-flex mr-2 rounded-circle feed-img float-left"
            src={userImg}
            alt="avatar"
          />
          {post.userDisplayName}
        </h5>
        <small className="text-muted">{post.getElapsedTime()} ago</small>
      </Fragment>
    );
  }
}

export { FeedHeading };
