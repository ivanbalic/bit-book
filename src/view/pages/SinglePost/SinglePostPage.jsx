import React, { Component, Fragment } from "react";

import { Loader } from "../../components/Loader/Loader";
import { CommentList } from "./CommentList/CommentList";
import { PostHeading } from "./PostHeading/PostHeading";
import { PostContent } from "./PostContent/PostContent";
import { DeleteButton } from "./DeleteButton/DeleteButton";
import { postCommunicator } from "../../../communicators/PostCommunicator/PostCommunicator";

class SinglePostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      comments: null,
      errorAlert: "",
      successAlert: "",
      postId: this.props.location.state.id,
      postType: this.props.location.state.type
    };
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleUserClick() {
    this.props.history.push({
      pathname: "/profile",
      state: {
        userId: this.state.post.userId
      }
    });
  }

  handleDelete() {
    postCommunicator
      .deletePost(this.state.postId)
      .then(message => {
        alert(message);
        this.props.history.push("/feed");
      })
      .catch(({ message }) => {
        alert(message);
      });
  }

  componentDidMount() {
    const { postId, postType } = this.state;
    postCommunicator
      .getSinglePost(postId, postType)
      .then(post => {
        this.setState({
          post
        });
      })
      .catch(({ message }) => {
        this.props.history.push({
          pathname: "/error"
        });
        console.error(message);
      });
  }

  render() {
    const { post, postId } = this.state;
    return (
      <main className="container">
        <div className="row">
          <div className="col-lg-11">
            {post ? (
              <Fragment>
                <div className="bg-light rounded">
                  {post.userId ===
                  parseInt(sessionStorage.getItem("userId")) ? (
                    <DeleteButton handleDelete={this.handleDelete} />
                  ) : null}
                  <PostHeading
                    post={post}
                    handleUserClick={this.handleUserClick}
                  />
                  <hr className="m-0 mb-1" />
                  <PostContent post={post} />
                </div>
                <hr />
                <CommentList postId={postId} />
              </Fragment>
            ) : (
              <Loader className="blue" />
            )}
          </div>
        </div>
      </main>
    );
  }
}

export { SinglePostPage };
