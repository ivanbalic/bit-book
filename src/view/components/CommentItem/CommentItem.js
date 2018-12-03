import React from 'react';

import './CommentItem.css';

const CommentItem = ({ comment }) => {

    return (
        <li class="media my-4 p-2 border">
            <img class="mr-3" src="http://via.placeholder.com/100x100" alt="Generic placeholder image" />
            <div class="media-body">
                <h5 class="mt-0 mb-1">{comment.authorName}</h5>
                {comment.body}
            </div>
        </li>
    );
}

export {
    CommentItem
}