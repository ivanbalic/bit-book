import React from 'react';
import { FeedItem } from '../FeedItem/FeedItem';

import './FeedList.css'

const FeedList = ({ posts }) => {


    return (
        <>
            <div>
                {posts.map((post) => {
                    return <FeedItem post={post} />
                })}
            </div>
        </>
    );
}

export { FeedList };