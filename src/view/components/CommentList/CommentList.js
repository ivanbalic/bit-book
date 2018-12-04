import React, { Component } from 'react';

import { CommentInput } from '../CommentInput/CommentInput';
import { CommentItem } from '../CommentItem/CommentItem';
import { commentService } from '../../../services/comment-service/commentService';


class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: null,
        }
    }

    loadComments = () => {
        commentService.fetchComments(this.props.postId)
            .then((comments) => {
                this.setState({
                    comments
                })
            })
    }

    componentDidMount() {
        this.loadComments();
    }

    render() {

        const { comments } = this.state;

        if (!comments) {
            return <h1 className='text-center mt-4'>Loading...</h1>
        }
        if (!comments.length) {
            return (
                <>
                    <CommentInput postId={this.props.postId} loadComments={this.loadComments} />
                    <h1 className='text-center mt-4'>No comments!</h1>
                </>
            )
        }

        console.log(comments);

        const commentItemList = comments.map((comment) => {
            return <CommentItem key={comment.id} comment={comment} />
        })
        return (
            <>
                <CommentInput postId={this.props.postId} loadComments={this.loadComments} />
                <ul className="list-unstyled my-4 px-4" >
                    {commentItemList.reverse()}
                </ul>
            </>
        );
    }
}

export default CommentList;
