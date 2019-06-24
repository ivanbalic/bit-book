import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { userCommunicator } from "../../../../../communicators/UserCommunicator/UserCommunicator";

import "./CommentItem.css";

class CommentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.comment,
      userImg:
        "http://sg-fs.com/wp-content/uploads/2017/08/user-placeholder.png"
    };
    this.handleUserClick = this.handleUserClick.bind(this);
  }

  handleUserClick() {
    this.props.history.push({
      pathname: "/profile",
      state: {
        userId: this.state.comment.authorId
      }
    });
  }

  componentDidMount() {
    userCommunicator
      .getSingleUser(this.state.comment.authorId)
      .then(({ image }) => {
        this.setState({ userImg: image });
      });
  }

  render() {
    const { userImg, comment } = this.state;
    const { body, authorName } = comment;
    return (
      <div className="bg-light pt-1 radius">
        <div className="media mx-4 mt-4 mb-1">
          <img
            src={userImg}
            alt="avatar"
            onClick={this.handleUserClick}
            className="d-flex mr-3 rounded-circle comment-img item-link"
          />
          <div className="px-3 py-1 fit-content radius comment-item-bg">
            <h6
              onClick={this.handleUserClick}
              className="m-0 item-link d-inline-block fit-content"
            >
              {authorName}
            </h6>
            {` ${body}`}
          </div>
        </div>
        <small className="text-muted ml-4">
          {comment.getElapsedTime()} ago
        </small>
        <h5 className="text-primary float-right mr-3">
          <i className="far fa-thumbs-up" />
        </h5>
        <hr />
      </div>
    );
  }
}

export default withRouter(CommentItem);
