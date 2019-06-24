import React, { Component } from "react";

import { validationService } from "../../../services/ValidationService/ValidationService";
import { postCommunicator } from "../../../communicators/PostCommunicator/PostCommunicator";

import "./CreatePost.css";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      postContent: "",
      messageClass: "",
      imageClass: "",
      videoClass: "",
      textClass: "active-type shadow-sm",
      whoIsActive: "TextPosts"
    };
    this.handlePostCreate = this.handlePostCreate.bind(this);
  }

  checkText(text) {
    let message;
    message = validationService.isTextValid(text)
      ? ""
      : "Text can't include www, http or start with '<'";
    this.setState({ message, messageClass: "danger" });
  }

  checkImageUrl(imageUrl) {
    let message;
    message = validationService.isImageUrlValid(imageUrl)
      ? ""
      : "Invalid format! Image link must start with http or https and end with jpg, svg, png or gif.";
    this.setState({ message, messageClass: "danger" });
  }

  checkVideoUrl(videoUrl) {
    let message;
    message = validationService.isVideoUrlValid(videoUrl)
      ? ""
      : "Invalid format! YouTube embeded videos only.";
    this.setState({ message, messageClass: "danger" });
  }

  checkPostContent(content, type) {
    switch (type) {
      case "TextPosts":
        this.checkText(content);
        break;
      case "ImagePosts":
        this.checkImageUrl(content);
        break;
      case "VideoPosts":
        this.checkVideoUrl(content);
        break;
      default:
        break;
    }
  }

  createPayload(whoIsActive, postContent) {
    switch (whoIsActive) {
      case "TextPosts":
        return {
          text: postContent
        };
      case "ImagePosts":
        return {
          imageUrl: postContent
        };
      case "VideoPosts":
        return {
          videoUrl: postContent
        };
      default:
        break;
    }
  }

  handlePostCreate() {
    const { postContent, whoIsActive, message } = this.state;
    if (!message) {
      postCommunicator
        .addPost(this.createPayload(whoIsActive, postContent), whoIsActive)
        .then(message => {
          this.props.loadPosts();
          this.setState({
            message,
            postContent: "",
            messageClass: "success"
          });
          setTimeout(() => {
            this.setState({ message: "", messageClass: "" });
          }, 2000);
        })
        .catch(({ message }) =>
          this.setState({ message, messageClass: "danger" })
        );
    }
  }

  render() {
    const { name, image } = this.props;
    const {
      postContent,
      whoIsActive,
      messageClass,
      message,
      textClass,
      imageClass,
      videoClass
    } = this.state;
    return (
      <div className="card mb-4 shadow-sm">
        <h5 className="card-header button-active">Create post</h5>
        <div className="card-body bg-white shadow-sm">
          <div className="input-group">
            <img src={image} className="rounded-circle feed-img" alt="avatar" />
            <input
              type="text"
              value={postContent}
              className="form-control border-0 pb-5 pt-4"
              placeholder={`What's on your mind, ${name}?`}
              onChange={({ target }) => {
                this.setState({ postContent: target.value });
                this.checkPostContent(target.value, whoIsActive);
              }}
              onBlur={() =>
                setTimeout(() => {
                  this.setState({
                    message: "",
                    postContent: "",
                    messageClass: ""
                  });
                }, 200)
              }
            />
          </div>
          <small className={`text-${messageClass}`}>{message}</small>
        </div>
        <div className="card-footer text-muted d-flex flex-row pt-0">
          <span
            className={`nav-link rounded-bottom ${textClass}`}
            onClick={() => {
              this.setState({
                whoIsActive: "TextPosts",
                textClass: "active-type shadow-sm",
                imageClass: "",
                videoClass: ""
              });
            }}
          >
            <i className="fas fa-pencil-alt" /> Text
          </span>
          <span
            className={`nav-link rounded-bottom ${imageClass}`}
            onClick={() => {
              this.setState({
                whoIsActive: "ImagePosts",
                textClass: "",
                imageClass: "active-type shadow-sm",
                videoClass: ""
              });
            }}
          >
            <i className="fas fa-image" /> Image
          </span>
          <span
            className={`nav-link rounded-bottom ${videoClass}`}
            onClick={() => {
              this.setState({
                whoIsActive: "VideoPosts",
                textClass: "",
                imageClass: "",
                videoClass: "active-type shadow-sm"
              });
            }}
          >
            <i className="fas fa-video" /> Video
          </span>
          <span className="input-group-btn ml-auto">
            <button
              type="button"
              className="btn button-active mt-2 shadow-sm"
              onClick={this.handlePostCreate}
            >
              Post
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export { CreatePost };
