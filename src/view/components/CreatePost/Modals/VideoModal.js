import React, { Component } from 'react';
import { postService } from '../../../../services/post-service/postService';
import './VideoModal.css';
class VideoModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: "",
            error: true,
            buttonClass: "btn btn-primary disabled"

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

        this.setState({ inputValue: "" })
    }

    getInputValue = (event) => {
        let stateObj;

        if (event.target.value.startsWith("https://www.youtube.com") || event.target.value.startsWith("http://www.youtube.com")) {
            console.log(event.target.value);
            const embedVideo = event.target.value.split("watch?v=").join("embed/");

            console.log(embedVideo);
            stateObj = {
                inputValue: embedVideo,
                error: true,
                buttonClass: "btn btn-primary",
            }
        } else {
            stateObj = {
                inputValue: event.target.value,
                error: false,
                buttonClass: "btn btn-primary disabled",
            }


        }
        this.setState(stateObj)
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
                            <input type="text" className={this.state.error ? "form-control col-11 m-3" : "form-control col-11 m-3 alertInput"} value={this.state.inputValue} onChange={this.getInputValue} placeholder="Post video" aria-label="Username" />
                            <p className="alertParagraph">{this.state.error ? "" : "Error input"}</p>
                            <div className="modal-footer">
                                <button onClick={this.createPostHandler} type="button" className={this.state.buttonClass} data-toggle={this.state.error ? "modal" : ""} data-target="#videoModal">Post video</button>
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