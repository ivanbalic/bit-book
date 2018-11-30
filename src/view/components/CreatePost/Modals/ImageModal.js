import React, { Component } from 'react';
import { postService } from '../../../../services/post-service/postService';


class ImageModal extends Component {
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
            imageUrl: this.state.inputValue
        }

        postService.createPost(payload, "ImagePosts")
            .then(response => {
                return response.json()
            })
            .catch((err) => {
                console.log(err);
            })
        this.setState({ inputValue: "" })
    }

    getInputValue = (event) => {
        let stateObj;

        let splitInputValue = event.target.value.split(".")
        const ext = splitInputValue[splitInputValue.length - 1].toLowerCase();
        console.log(ext);
        let imageFormat = false;
        switch (ext) {
            case "jpg":
                imageFormat = "jpg"
                break;
            case "png":
                imageFormat = "png"
                break;
            case "svg":
                imageFormat = "svg"
                break;
            case "gif":
                imageFormat = "gif"
                break;
            default:
        }
        if ((event.target.value.startsWith("https://") || event.target.value.startsWith("http://")) && event.target.value.endsWith(imageFormat)) {
            console.log(event.target.value);
            stateObj = {
                inputValue: event.target.value,
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
                <div className="modal fade" id="imageModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New image post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <input type="text" className={this.state.error ? "form-control col-11 m-3" : "form-control col-11 m-3 alertInput"} value={this.state.inputValue} onChange={this.getInputValue} placeholder="Post image" aria-label="Username" />
                            <p className="alertParagraph">{this.state.error ? "" : "Error input"}</p>
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