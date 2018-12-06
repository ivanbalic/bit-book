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
        console.log(this.props.comment)
        userService.fetchSingleUser(this.state.userId)
            .then(user => {
                this.setState({ userImage: user.image })
            })
    }

    componentDidMount() {
        this.loadSingleUser();
    }

    render() {
        if (!this.state.userImage) {
            return <h3>Loading...</h3>
        }
        return (
            <li className="media my-4 p-2 border row" >
                <div className="col-3">
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