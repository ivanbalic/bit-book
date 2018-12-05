import React, { Component } from 'react';

import { FeedList } from '../components/FeedList/FeedList';
import { postService } from '../../services/post-service/postService';
import { CreatePost } from '../components/CreatePost/CreatePost';

class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            filterParam: 'all',
        }
    }

    loadPosts = () => {
        const postsPromise = postService.fetchPosts();

        postsPromise.then((myPosts) => {

            this.setState({
                posts: myPosts,
            });
        });
    }

    filterParamChangeHandler = (event) => {
        this.setState({
            filterParam: event.target.value,
        });
    }

    componentDidMount() {

        this.loadPosts();
    }

    render() {

        const { posts, filterParam } = this.state;
        let filteredPosts;

        if (!posts) {
            return (
                <p>Loading...</p>
            );
        }

        if (filterParam === 'all') {
            filteredPosts = posts;
        } else {
            filteredPosts = posts.filter((post) => {
                return post.type === filterParam
            });
        }

        return (
            <>
                <div className="col-10">
                    <FeedList posts={filteredPosts} />
                    <CreatePost loadPosts={this.loadPosts} />
                </div>
                <div className="col-2 mt-4 pr-4 h-25">
                    <select className='w-100' onChange={this.filterParamChangeHandler}>
                        <option value="all">All posts</option>
                        <option value="text">Text</option>
                        <option value="image">Images</option>
                        <option value="video">Videos</option>
                    </select>
                </div>
            </>
        );
    }
}

export default FeedPage;
