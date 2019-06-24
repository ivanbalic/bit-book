import React from "react";
import { withRouter } from "react-router-dom";

import "./PeopleItem.css";

const PeopleItem = ({ user, history }) => {
  const { id, image, name } = user;
  const handleUserClick = () =>
    history.push({ pathname: "/profile", state: { userId: id } });

  return (
    <div className="col-lg-4 col-sm-6 radius">
      <div className="card people-card hovercard bg-white">
        <div className="cardheader" />
        <div className="avatar">
          <img
            className="bg-light border"
            alt="avatar"
            src={image}
            onClick={handleUserClick}
          />
        </div>
        <div className="infot">
          <div className="title">
            <div className="item-link" onClick={handleUserClick}>
              {name}
            </div>
          </div>
          <div className="desc">
            <i className="fas fa-wifi" />{" "}
            {user.getElapsedTime() === "49 years"
              ? "Long time ago"
              : `${user.getElapsedTime()} ago`}
          </div>
        </div>
        <div className="bottom">
          <span className="people-btn btn-info btn-twitter btn-sm m-1">
            <i className="fas fa-user-plus" />
          </span>
          <span
            className="people-btn btn-success btn-sm m-1"
            onClick={handleUserClick}
          >
            <i className="fas fa-eye" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PeopleItem);
