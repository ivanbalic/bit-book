import React from 'react';
import { Link } from 'react-router-dom';

import { createFeedContent } from '../../../shared/createFeedContent';
import './FeedItem.css';

const FeedItem = ({ post }) => {

    const { commentsNum, id, type, userId } = post;

    let displayCommentNum;
    if (commentsNum > 1) {
        displayCommentNum = `${commentsNum} comments`;
    } else {
        displayCommentNum = `${commentsNum} comment`;
    }

    return (
        <Link to={`/post-details/${type}/${id}/${userId}`} className="item-link">
            <div className="card my-4 item-decoration element-bg radius">
                <div className='p-3'>
                    {createFeedContent(post)}
                </div>
                <div className="card-body">
                    <p className="card-text">
                        <small className="text-muted">{post.getCapitalType()} post</small>
                        <small className="text-muted float-right">{displayCommentNum}</small>
                    </p>
                </div>
            </div>
        </Link>
    );
}

export {
    FeedItem
}
