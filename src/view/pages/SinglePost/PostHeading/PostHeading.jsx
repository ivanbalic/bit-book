import React, { Component } from "react";

import { userCommunicator } from "../../../../communicators/UserCommunicator/UserCommunicator";

import "./PostHeading.css";

class PostHeading extends Component {
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
    const { userImg, post } = this.state;
    return (
      <div className="px-3 pt-3">
        <h3
          className="item-link fit-content"
          onClick={this.props.handleUserClick}
        >
          <img
            src={userImg}
            alt="avatar"
            className="post-img rounded-circle mr-1"
          />
          {post.userDisplayName}
        </h3>
        <p className="mb-0">
          {post.getFormatedDate()}, {post.getFormatedTime()}
        </p>
        <small>{post.getCapitalType()} Post</small>
      </div>
    );
  }
}

export { PostHeading };
