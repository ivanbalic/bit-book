import React from 'react';

const PostText = ({ post }) => {
    const { text } = post;
    return (
        <p>{text}</p>
    )
}

export {
    PostText
}