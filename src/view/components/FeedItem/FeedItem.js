import React from 'react';
import { Link } from 'react-router-dom';
import { PostImage } from './FeedContent/PostImage';
import { PostText } from './FeedContent/PostText';
import { PostVideo } from './FeedContent/PostVideo';

const feedContent = (type, content) => {
    if (type === 'text') {
        return (
            <PostText content={content} />
        );
    } else if (type === 'video') {
        return (
            <PostVideo content={content} />
        );
    }
    return (
        <PostImage content={content} />
    );

}


const FeedItem = ({ post }) => {
    const { commentsNum, type, content } = post;

    return (
        <div className="card mb-3">
            <div className='p-3'>
                {feedContent(type, content)}
            </div>
            <div className="card-body">
                <p className="card-text">
                    <small className="text-muted">{post.getCapitalType()} post</small>
                    <Link to='/post-details'>
                        <small className="text-muted float-right">{commentsNum} Comments</small>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export {
    FeedItem
}
