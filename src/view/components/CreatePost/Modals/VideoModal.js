import React, { Component } from 'react';
import { postService } from '../../../../services/post-service/postService';

class VideoModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ""
        }
    }

    createPostHandler = () => {

        const payload = {
            videoUrl: this.state.inputValue
        }

        postService.createPost(payload, "VideoPosts")
            .then(response => {
                return response.json();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    getInputValue = (event) => {

        console.log(event.target.value);
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        return (
            <>
                <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New video post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <input type="text" className="form-control col-11 m-3" value={this.state.inputValue} onChange={this.getInputValue} placeholder="Post video" aria-label="Username" />
                            <div className="modal-footer">
                                <button onClick={this.createPostHandler} type="button" className="btn btn-primary">Post video</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export {
    VideoModal
}
