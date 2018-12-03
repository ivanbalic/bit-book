import React, { Component } from 'react';

import { FeedList } from '../components/FeedList/FeedList';
import { FeedItem } from '../components/FeedItem/FeedItem';
import { postService } from '../../services/post-service/postService';
import { CreatePost } from '../components/CreatePost/CreatePost';

class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
        }
    }

    loadPosts = () => {
        const postsPromise = postService.fetchPosts();

        postsPromise.then((myPosts) => {
            console.log(myPosts);

            this.setState({
                posts: myPosts,
            });
        });
    }

    componentDidMount() {

        this.loadPosts();
    }

    render() {

        const { posts } = this.state;

        if (!posts) {
            return (
                <p>Loading...</p>
            );
        }

        return (
            <>
                <FeedList posts={posts} />
                <CreatePost loadPosts={this.loadPosts} />
            </>
        );
    }
}

export default FeedPage;
