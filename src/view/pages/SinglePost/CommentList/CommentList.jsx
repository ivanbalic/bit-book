import React, { Component, Fragment } from "react";

import CommentItem from "./CommentItem/CommentItem";
import { Loader } from "../../../components/Loader/Loader";
import { CommentInput } from "../CommentInput/CommentInput";
import { commentCommunicator } from "../../../../communicators/CommentCommunicator/CommentCommunicator";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null
    };
    this.loadComments = this.loadComments.bind(this);
  }
  loadComments() {
    commentCommunicator
      .getComments(this.props.postId)
      .then(comments => {
        this.setState({
          comments
        });
      })
      .catch(({ message }) => {
        this.props.history.push({
          pathname: "/error"
        });
        console.error(message);
      });
  }

  componentDidMount() {
    this.loadComments();
  }

  render() {
    const { comments } = this.state;

    return comments ? (
      <Fragment>
        <CommentInput
          postId={this.props.postId}
          loadComments={this.loadComments}
        />
        <hr />
        <div className="mx-5">
          {comments
            .map(comment => <CommentItem key={comment.id} comment={comment} />)
            .reverse()}
        </div>
      </Fragment>
    ) : (
      <Loader className="blue" />
    );
  }
}

export { CommentList };
