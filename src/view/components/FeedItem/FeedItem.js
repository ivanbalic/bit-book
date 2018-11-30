import React from 'react';
import { Link } from 'react-router-dom';

import { createFeedContent } from '../../../shared/createFeedContent';

const FeedItem = ({ post }) => {
    console.log(post);

    const { commentsNum, id, type } = post;


    return (
        <div className="card mb-3">
            <div className='p-3'>
                {createFeedContent(post)}
            </div>
            <div className="card-body">
                <p className="card-text">
                    <small className="text-muted">{post.getCapitalType()} post</small>
                    <Link to={`/post-details/${type}/${id}`}>
                        <small className="text-muted float-right">{commentsNum} Comment/s</small>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export {
    FeedItem
}
