import React, { Component } from "react";

import { validationService } from "../../../../services/ValidationService/ValidationService";
import { userCommunicator } from "../../../../communicators/UserCommunicator/UserCommunicator";

import "./EditProfile.css";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      email: "",
      errorUrl: "",
      errorName: "",
      avatarUrl: "",
      errorEmail: "",
      updateClass: "",
      description: "",
      updateMessage: "",
      errorDescription: ""
    };
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleProfileEdit = this.handleProfileEdit.bind(this);
  }

  handleProfileEdit() {
    const {
      id,
      name,
      email,
      errorUrl,
      avatarUrl,
      errorName,
      errorEmail,
      description,
      errorDescription
    } = this.state;

    if (!errorUrl && !errorName && !errorEmail && !errorDescription) {
      const payload = {
        name,
        email,
        aboutShort: description,
        about: description,
        avatarUrl: avatarUrl
      };

      userCommunicator
        .editProfile(payload)
        .then(message => {
          this.props.loadProfile(id);
          this.setState({
            updateMessage: message,
            updateClass: "text-success"
          });
        })
        .catch(({ message }) => {
          this.setState({
            updateMessage: message,
            updateClass: "text-danger"
          });
        });
    }
  }

  handleModalClose() {
    const { name, email, description, image } = this.props.profile;
    this.setState({
      name,
      email,
      description,
      errorUrl: "",
      errorName: "",
      errorEmail: "",
      avatarUrl: image,
      updateClass: "",
      updateMessage: "",
      errorDescription: ""
    });
  }

  checkName(name) {
    let message;
    message = validationService.isNameValid(name)
      ? validationService.isTextValid(name)
        ? ""
        : "Name can't include www, http or start with '<'"
      : "Name can't be longer then 30 characters";
    this.setState({ errorName: message });
  }

  checkAvatarUrl(avatarUrl) {
    let message;
    message = validationService.isImageUrlValid(avatarUrl)
      ? ""
      : "Invalid format! Link must start with http or https and end with jpg, svg, png or gif.";
    this.setState({ errorUrl: message });
  }

  checkEmail(email) {
    let message;
    message = validationService.isEmailValid(email)
      ? ""
      : "Invalid format! Email must include @ and end with .com";
    this.setState({ errorEmail: message });
  }

  checkDescription(description) {
    let message;
    message = validationService.isTextValid(description)
      ? ""
      : "Description can't include www, http or start with '<'";
    this.setState({ errorDescription: message });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
      const { id, name, email, description, image } = this.props.profile;
      this.setState({ id, name, email, description, avatarUrl: image });
    }
  }

  componentDidMount() {
    const { id, name, email, description, image } = this.props.profile;
    this.setState({ id, name, email, description, avatarUrl: image });
  }

  render() {
    const {
      name,
      email,
      errorUrl,
      avatarUrl,
      errorName,
      errorEmail,
      description,
      updateClass,
      updateMessage,
      errorDescription
    } = this.state;

    return (
      <div
        className="modal fade"
        id="editProfile"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header border-0 p-2 button-active">
              <h3 className="modal-title">
                <i className="fas fa-cogs" /> Edit Profile
              </h3>
            </div>
            <div className="modal-body p-2">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <img
                      className="my-0 mx-auto w-100"
                      src={
                        avatarUrl
                          ? avatarUrl
                          : "http://via.placeholder.com/100x100"
                      }
                      alt="preview"
                    />
                    <button type="button" className="btn button-active my-2">
                      UPLOAD PHOTO
                    </button>
                  </div>
                  <div className="col-md-8 col-sm-12 mt-4">
                    <div className="form-label-group">
                      <input
                        autoFocus
                        type="text"
                        id="name"
                        value={name}
                        className="form-control"
                        placeholder="Enter name"
                        onChange={({ target }) => {
                          this.checkName(target.value);
                          this.setState({ name: target.value });
                        }}
                      />
                      <label htmlFor="name">Name</label>
                      <small className="text-danger">{errorName}</small>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="email"
                        value={email}
                        className="form-control"
                        placeholder="Enter email"
                        onChange={({ target }) => {
                          this.checkEmail(target.value);
                          this.setState({ email: target.value });
                        }}
                      />
                      <label htmlFor="email">Email</label>
                      <small className="text-danger">{errorEmail}</small>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="avatarUrl"
                        value={avatarUrl}
                        className="form-control"
                        placeholder="Enter image url"
                        onChange={({ target }) => {
                          this.checkAvatarUrl(target.value);
                          this.setState({ avatarUrl: target.value });
                        }}
                      />
                      <label htmlFor="avatarUrl">Image URL</label>
                      <small className="text-danger">{errorUrl}</small>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="description"
                        value={description}
                        className="form-control"
                        placeholder="Enter description"
                        onChange={({ target }) => {
                          this.checkDescription(target.value);
                          this.setState({ description: target.value });
                        }}
                      />
                      <label htmlFor="description">Description</label>
                      <small className="text-danger">{errorDescription}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 p-2">
              <small className={updateClass}>{updateMessage}</small>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={this.handleModalClose}
              >
                CLOSE
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={this.handleProfileEdit}
              >
                UPDATE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { EditProfile };
