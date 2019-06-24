import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

const UserItem = ({ user, history }) => {
  const { image, id, name } = user;
  const handleUserClick = () => {
    history.push({
      pathname: "/profile",
      state: {
        userId: id
      }
    });
  };
  return (
    <Fragment>
      <div className="media mx-4 my-0">
        <img
          src={image}
          alt="avatar"
          onClick={handleUserClick}
          className="d-flex rounded-circle comment-img item-link"
        />
        <div className="p-1 fit-conten">
          <h6
            onClick={handleUserClick}
            className="m-0 item-link d-inline-block fit-content"
          >
            {name}
          </h6>
        </div>
      </div>
      <small className="text-muted pl-4">
        Last post: {user.getElapsedTime()} ago
      </small>
      <hr />
    </Fragment>
  );
};

export default withRouter(UserItem);
