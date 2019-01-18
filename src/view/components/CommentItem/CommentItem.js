import React, { Component } from 'react';
import { userService } from '../../../services/user-service/user-service';
import './CommentItem.css';

class CommentItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.comment.authorId,
            userImage: ""
        }
    }


    loadSingleUser = () => {
        userService.fetchSingleUser(this.state.userId)
            .then(user => {
                this.setState({ userImage: user.image })
            })
    }

    componentDidMount() {
        this.loadSingleUser();
    }

    render() {
        return (
            <li className="media my-4 p-2 border row element-bg radius" >
                <div className="col-3 border-r">
                    <img className="mr-3 w-100 rounded-circle" src={this.state.userImage} alt="Generic placeholder" />
                </div>
                <div className="media-body col-9">
                    <h5 className="mt-0 mb-1">{this.props.comment.authorName}</h5>
                    {this.props.comment.body}
                </div>
            </li>
        );
    }
}

export {
    CommentItem
}