import React from "react";

const PostContent = ({ post }) => {
  const { imageUrl, videoUrl, text } = post;
  return imageUrl ? (
    <img className="img-fluid rounded w-100" src={imageUrl} alt="post" />
  ) : text ? (
    <p className="lead p-3">{text}</p>
  ) : videoUrl ? (
    <div className="embed-responsive embed-responsive-16by9 ">
      <iframe
        className="embed-responsive-item card-img-top"
        src={videoUrl}
        allowFullScreen
        title="post video"
      />
    </div>
  ) : null;
};

export { PostContent };
