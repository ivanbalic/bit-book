import React, { Component } from 'react';

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
        postService.deletePost(this.state.postId)
            .then(response => {
                this.props.history.push('/feed')
            })
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
            <div className="col-10 offset-1">
                {post.userId === parseInt(sessionStorage.getItem("userId")) ? <button className='btn btn-primary mt-3' onClick={this.deletePostHandler}>Delete Post</button> : null}
                <div className='mt-4 p-4 border'>
                    {createFeedContent(post)}
                </div>
                <CommentList postId={this.state.postId} />
            </div>
        );
    }
}

export default SinglePostPage;
