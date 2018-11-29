import React from 'react';

const PostVideo = ({ post }) => {
    const { videoUrl } = post;
    return (
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src={videoUrl} allowfullscreen></iframe>
        </div>
    )
}

export {
    PostVideo
}