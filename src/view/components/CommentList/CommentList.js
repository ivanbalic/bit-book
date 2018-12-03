import React, { Component } from 'react';

import { CommentItem } from '../CommentItem/CommentItem';
import { commentService } from '../../../services/comment-service/commentService';


class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: null,
        }
    }

    componentDidMount() {
        commentService.fetchComments(this.props.postId)
            .then((comments) => {
                this.setState({
                    comments
                })
            })
    }

    render() {
        if (!this.state.comments) {
            return <h1 className='text-center mt-4'>Loading...</h1>
        }
        if (!this.state.comments.length) {
            return <h1 className='text-center mt-4'>No comments!</h1>
        }

        console.log(this.state.comments);

        const comments = this.state.comments.map((comment) => {
            return <CommentItem comment={comment} />
        })
        return (
            <ul class="list-unstyled my-4 px-4">
                {comments}
            </ul>
        );
    }
}

export default CommentList;
