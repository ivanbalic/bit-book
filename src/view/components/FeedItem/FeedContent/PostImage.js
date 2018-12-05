import React from 'react';

const PostImage = ({ post }) => {
    const { imageUrl } = post;
    return (
        <img className='card-img-top' src={imageUrl} alt='post' />
    );
}

export {
    PostImage
}