import React from 'react';

import './CommentItem.css';

const CommentItem = ({ comment }) => {

    return (
        <li className="media my-4 p-2 border">
            <img className="mr-3" src="http://via.placeholder.com/100x100" alt="Generic placeholder image" />
            <div className="media-body">
                <h5 className="mt-0 mb-1">{comment.authorName}</h5>
                {comment.body}
            </div>
        </li>
    );
}

export {
    CommentItem
}