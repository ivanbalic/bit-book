import React from "react";

const VideoContent = ({ videoUrl }) => (
  <div className="embed-responsive embed-responsive-16by9 ">
    <iframe
      className="embed-responsive-item card-img-top"
      src={videoUrl}
      allowFullScreen
      title="post video"
    />
  </div>
);

export { VideoContent };
