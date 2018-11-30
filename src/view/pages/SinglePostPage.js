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
                    post: post
                })
            });
    }

    render() {
        const { post, comments } = this.state;
        let noCommentMessage;
        let commentList;

        if (!post) {
            return (
                <p>No comments</p>
            );
        }

        return (
            <>
                <p>POST CONTENT GOES HERE</p>
                {createFeedContent(post)}
                <CommentInput />
                <CommentList postId={post.id} />
                {comments ? commentList : noCommentMessage}
            </>
        );
    }
}

export default SinglePostPage;