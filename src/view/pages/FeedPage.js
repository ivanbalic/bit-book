import React, { Component } from 'react';
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

    componentDidMount() {

        const postsPromise = postService.fetchPosts();

        postsPromise.then((myPosts) => {
            console.log(myPosts);

            this.setState({
                posts: myPosts,
            });
        });
    }

    render() {
        const { posts } = this.state;
        if (!posts) {
            return (
                <p>Loading...</p>
            );
        }
        const feedList = posts.map((post) => {
            const { id } = post;
            return <FeedItem key={id} post={post} />
        })
        return (
            <>
                {feedList}
                <CreatePost />
            </>
        );
    }
}

export default FeedPage;
