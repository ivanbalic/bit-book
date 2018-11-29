import React from 'react';
import { FeedImage } from './FeedContent/FeedImage';
import { FeedText } from './FeedContent/FeedText';
import { FeedVideo } from './FeedContent/FeedVideo';

const FeedItem = () => {
    return (
        <>
            <div className="card">
                {/* <FeedImage />
            <FeedText />
            <FeedVideo /> */}
                <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Post type number of comments</p>
                </div>
            </div>

        </>
    );
}

export {
    FeedItem
}
