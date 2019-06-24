import React from "react";
import { withRouter } from "react-router-dom";

import { TextContent } from "./FeedContent/TextContent";
import { FeedHeading } from "./FeedHeading/FeedHeading";
import { VideoContent } from "./FeedContent/VideoContent";
import { ImageContent } from "./FeedContent/ImageContent";

import "./FeedItem.css";

const FeedItem = ({ post, history }) => {
  const { id, type, text, userId, imageUrl, videoUrl, commentsNum } = post;

  function handleUserClick(event) {
    event.stopPropagation();
    history.push({
      pathname: "/profile",
      state: {
        userId
      }
    });
  }

  function handelPostClick() {
    history.push({
      pathname: "/post-details",
      state: {
        id,
        type,
        userId
      }
    });
  }

  return (
    <div
      className="card mb-4 item-decoration border-0 shadow"
      onClick={handelPostClick}
    >
      <div className="card-body">
        <FeedHeading post={post} handleUserClick={handleUserClick} />
        <hr className="my-1" />
        {text ? <TextContent text={text} /> : null}
      </div>
      {imageUrl ? <ImageContent imageUrl={imageUrl} /> : null}
      {videoUrl ? <VideoContent videoUrl={videoUrl} /> : null}
      <div className="card-footer text-muted">
        <small className="text-muted float-right">
          {commentsNum} <i className="fas fa-comments" />
        </small>
        <small className="text-muted float-left mr-2">
          {post.getCapitalType()} post
        </small>
      </div>
    </div>
  );
};

export default withRouter(FeedItem);
