import React, { Component } from "react";

import { validationService } from "../../../../../services/ValidationService/ValidationService";
import { postCommunicator } from "../../../../../communicators/PostCommunicator/PostCommunicator";

import "./VideoModal.css";

class VideoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      error: false,
      buttonClass: "btn button-active disabled"
    };
  }

  createPostHandler = () => {
    const payload = {
      videoUrl: this.state.inputValue
    };

    postCommunicator.addPost(payload, "VideoPosts").then(response => {
      this.props.loadPosts();
    });

    this.setState({ inputValue: "" });
  };

  getInputValue = event => {
    let stateObj;

    if (validationService.isVideoUrlValid(event.target.value)) {
      const embedVideo = event.target.value.split("watch?v=").join("embed/");
      stateObj = {
        inputValue: embedVideo,
        error: false,
        buttonClass: "btn button-active"
      };
    } else {
      stateObj = {
        inputValue: event.target.value,
        error: true,
        buttonClass: "btn button-active disabled"
      };
    }

    this.setState(stateObj);
  };

  render() {
    return (
      <>
        <div
          className="modal fade"
          id="videoModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  New video post
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <input
                type="text"
                className={
                  this.state.error
                    ? "form-control col-11 m-3 alertInput"
                    : "form-control col-11 m-3"
                }
                value={this.state.inputValue}
                onChange={this.getInputValue}
                placeholder="Post video"
                aria-label="Username"
              />
              <p className="alertParagraph">
                {this.state.error ? "Error input" : ""}
              </p>
              <div className="modal-footer">
                <button
                  onClick={this.createPostHandler}
                  type="button"
                  className={this.state.buttonClass}
                  data-toggle={this.state.error ? "modal" : ""}
                  data-target="#videoModal"
                >
                  Post video
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { VideoModal };
