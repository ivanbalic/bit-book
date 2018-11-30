import React from 'react';

import './CommentItem.css';

const CommentItem = ({ comment }) => {
    console.log(comment);


    return (
        <div className='border clearfix p-4'>
            <div className="d-inline float-left">
                <img className="rounded-circle" src="http://via.placeholder.com/100x100" alt="Card cap" />
                <p className="card-text  textOverflow">{comment.authorName}</p>
            </div>
            <div className="d-inline float-left ml-4">
                <p className="card-text">{comment.body}</p>
            </div>
        </div>
    );
}

export {
    CommentItem
}