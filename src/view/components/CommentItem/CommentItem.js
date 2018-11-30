import React from 'react';

import './CommentItem.css';

const CommentItem = ({ comment }) => {

    return (
        <div className='border clearfix p-4 my-4'>
            <div className="d-inline float-left">
                <img className="rounded-circle" src="http://via.placeholder.com/100x100" alt="Card cap" />
                <p className="card-text  textOverflow text-center">{comment.authorName}</p>
            </div>
            <div className="d-inline ml-4">
                <span>{comment.body}</span>
            </div>
        </div>
    );
}

export {
    CommentItem
}