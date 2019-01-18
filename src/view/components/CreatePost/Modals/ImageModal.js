import React, { Component } from 'react';
import { postService } from '../../../../services/post-service/postService';
import { validationService } from '../../../../services/validation-service/validationService';


class ImageModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: "",
            error: false,
            buttonClass: "btn button-active disabled"
        }
    }

    createPostHandler = () => {

        const payload = {
            imageUrl: this.state.inputValue
        }

        postService.createPost(payload, "ImagePosts")
            .then(response => {
                this.props.loadPosts();
            })
        this.setState({ inputValue: "" })
    }

    getInputValue = (event) => {
        let stateObj;

        if (validationService.isImageUrlCorrect(event.target.value)) {
            stateObj = {
                inputValue: event.target.value,
                error: false,
                buttonClass: "btn button-active",
            }
        } else {
            stateObj = {
                inputValue: event.target.value,
                error: true,
                buttonClass: "btn button-active disabled",
            }
        }

        this.setState(stateObj)
    }

    render() {
        return (
            <>
                <div className="modal fade" id="imageModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New image post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <input type="text" className={this.state.error ? "form-control col-11 m-3 alertInput" : "form-control col-11 m-3"} value={this.state.inputValue} onChange={this.getInputValue} placeholder="Post image" aria-label="Username" />
                            <p className="alertParagraph">{this.state.error ? "Error input" : ""}</p>
                            <div className="modal-footer">
                                <button onClick={this.createPostHandler} className={this.state.buttonClass} type="button" data-toggle={this.state.error ? "modal" : ""} data-target="#imageModal" >Post image</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export {
    ImageModal
}
