import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

const PostItem = ({ post, history }) => {
  const { id, userDisplayName, commentsNum, type, userId } = post;
  const handlePostClick = () => {
    history.push({
      pathname: "/post-details",
      state: {
        id,
        type
      }
    });
  };
  const handleUserClick = () => {
    history.push({
      pathname: "/profile",
      state: {
        userId
      }
    });
  };
  return (
    <Fragment>
      <div className="mx-4 my-0">
        <h6 onClick={handlePostClick} className="m-0 item-link">
          {post.getCapitalType()} post
        </h6>
        <small className="text-muted float-right">
          {commentsNum} <i className="fas fa-comments" />
        </small>
        <p>
          by{" "}
          <span onClick={handleUserClick} className="text-primary item-link">
            {userDisplayName}
          </span>
        </p>
      </div>
      <hr className="my-1" />
    </Fragment>
  );
};

export default withRouter(PostItem);
