import React from 'react';
import { Link } from 'react-router-dom';
import { PostImage } from './FeedContent/PostImage';
import { PostText } from './FeedContent/PostText';
import { PostVideo } from './FeedContent/PostVideo';

const feedContent = (post) => {
    console.log(post);

    if (post.isImage()) {
        return (
            <PostImage post={post} />
        );
    } else if (post.isVideo()) {
        return (
            <PostVideo post={post} />
        );
    }
    return (
        <PostText post={post} />
    );

}


const FeedItem = ({ post }) => {

    const { commentsNum } = post;


    return (
        <div className="card mb-3">
            <div className='p-3'>
                {feedContent(post)}
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
