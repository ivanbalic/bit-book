import React from "react";

import FeedItem from "./FeedItem/FeedItem";

const FeedList = ({ posts }) =>
  posts.map(post => <FeedItem key={post.id} post={post} />);

export { FeedList };
