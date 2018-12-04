import React, { Component } from 'react';
import { commentService } from '../../../services/comment-service/commentService';


class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.postId,
            inputValue: '',
            buttonClass: "btn btn-primary disabled"
        }
    }

    getInputValue = (event) => {
        let stateObj;
        if (!event.target.value.includes("http") && event.target.value.length >= 3 && !event.target.value.includes("<") && !event.target.value.includes("www")) {
            stateObj = {
                inputValue: event.target.value,
                buttonClass: "btn btn-primary",
            }
        } else {
            stateObj = {
                inputValue: event.target.value,
                buttonClass: "btn btn-primary disabled",
            }
        }
        this.setState(stateObj);
    }

    onCreateCommentHandler = () => {
        const payload = {
            'body': this.state.inputValue,
            'postId': this.state.postId
        }

        commentService.createComment(payload)
            .then((response) => {
                this.props.loadComments();
            })

        this.setState({
            inputValue: ''
        });
    }

    render() {
        return (
            <div className='mt-4 px-4 input-group-prepend'>
                <input className='form-control' type="text" placeholder='Add your comment...' onChange={this.getInputValue} value={this.state.inputValue} />
                <input type="button" value='SEND' className={this.state.buttonClass} onClick={this.onCreateCommentHandler} />
            </div>
        );
    }
}

export { CommentInput };