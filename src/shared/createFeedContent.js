import React from 'react';

import { PostImage } from '../view/components/FeedItem/FeedContent/PostImage';
import { PostText } from '../view/components/FeedItem/FeedContent/PostText';
import { PostVideo } from '../view/components/FeedItem/FeedContent/PostVideo';


const createFeedContent = (post) => {
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

export { createFeedContent };