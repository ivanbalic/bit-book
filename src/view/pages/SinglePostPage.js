import React, { Component } from 'react';

import { commentService } from '../../services/comment-service/commentService';

import { createFeedContent } from '../../shared/createFeedContent';
import CommentList from '../components/CommentList/CommentList';
import { CommentInput } from '../components/CommentInput/CommentInput';

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

    componentDidMount() {
        const { postId, postType } = this.state;

        commentService.fetchPost(postId, postType)
            .then((post) => {
                this.setState({
                    post
                })
            });
    }

    render() {
        const { post, comments } = this.state;


        if (!post) {
            return (
                <p>Loading...</p>
            );
        }

        return (
            <>
                <div className='mt-4 p-4 border'>
                    {createFeedContent(post)}
                </div>
                <CommentList loadComments={this.loadComments} comment={comments} postId={this.state.postId} />
            </>
        );
    }
}

export default SinglePostPage;