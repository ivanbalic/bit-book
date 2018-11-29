import React from 'react';

const PostVideo = ({ content }) => {
    return (
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src={content} allowfullscreen></iframe>
        </div>
    )
}

export {
    PostVideo
}