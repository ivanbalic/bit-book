import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { postService } from '../../services/post-service/postService';

import { createFeedContent } from '../../shared/createFeedContent';
import CommentList from '../components/CommentList/CommentList';


class SinglePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.match.params.postId,
            postType: this.props.match.params.postType,
            post: null,
            comments: null
        }
    }

    deletePostHandler = () => {
        postService.deletePost(this.state.postId);
    }

    componentDidMount() {
        const { postId, postType } = this.state;

        postService.fetchSinglePost(postId, postType)
            .then((post) => {
                this.setState({
                    post
                })
            });
    }

    render() {
        const { post } = this.state;

        if (!post) {
            return (
                <p>Loading...</p>
            );
        }

        return (
            <>
                {post.userId === 747 ? <Link to='/' className='btn btn-primary mt-3' onClick={this.deletePostHandler}>Delete Post</Link> : null}
                <div className='mt-4 p-4 border'>
                    {createFeedContent(post)}
                </div>
                <CommentList postId={this.state.postId} />
            </>
        );
    }
}

export default SinglePostPage;
