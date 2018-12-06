import React from 'react';
import { FeedItem } from '../FeedItem/FeedItem';

import './FeedList.css'

const FeedList = ({ posts }) => {


    return (
        <>
            <div>
                {posts.map((post) => {
                    return <FeedItem key={post.id} post={post} />
                })}
            </div>
        </>
    );
}

export { FeedList };