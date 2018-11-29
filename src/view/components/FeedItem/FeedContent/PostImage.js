import React from 'react';

const PostImage = ({ content }) => {
    return (
        <img className='card-img-top' src={content} alt='post image' />
    );
}

export {
    PostImage
}