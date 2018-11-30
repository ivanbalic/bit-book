import React from 'react';

const PostVideo = ({ post }) => {
    const { videoUrl } = post;
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
        </div>
    )
}

export {
    PostVideo
}