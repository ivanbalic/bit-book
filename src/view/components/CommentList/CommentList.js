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
            return (
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div>
            );
        }
        if (!comments.length) {
            return (
                <>
                    <CommentInput postId={this.props.postId} loadComments={this.loadComments} />
                    <div className="element-bg radius p-4 mt-4 mx-2">
                        <h3 className='text-center'>
                            No comments! Be the first one to commment this post <i className="far fa-grin-wink"></i>
                        </h3>
                    </div>
                </>
            )
        }

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
