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
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div>
            );
        }

        return (
            <div className="col-10 offset-1">
                <div className='mt-4 p-4 border element-bg radius'>
                    {createFeedContent(post)}
                    {post.userId === parseInt(sessionStorage.getItem("userId")) ? <button className='btn button-delete mt-3' onClick={this.deletePostHandler}><i className="fas fa-trash-alt"></i></button> : null}
                </div>
                <CommentList postId={this.state.postId} />
            </div>
        );
    }
}

export default SinglePostPage;
