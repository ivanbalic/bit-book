import React, { Component } from 'react';

import { userService } from '../../../services/user-service/user-service';

import './EditProfile.css';

class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: null,
            aboutShort: null,
            description: '',
            avatarUrl: '',
            errorName: false,
            errorUrl: false,
            errorDescription: false
        }
    }

    componentDidMount() {
        userService.fetchProfile()
            .then((profile) => {
                this.setState({
                    name: profile.name,
                    email: profile.email,
                    aboutShort: profile.aboutShort,
                    description: profile.description,
                    avatarUrl: profile.image
                })
            })
        console.log(this.state);
    }

    editProfileHandler = () => {
        const payload = {
            name: this.state.name,
            email: this.state.email,
            aboutShort: this.state.description.slice(0, 10),
            about: this.state.description,
            avatarUrl: this.state.avatarUrl
        }

        userService.changeProfile(payload)
            .then((response) => {
                this.props.fetchProfile();
            });
    }

    closeEditProfileHandler = () => {
        userService.fetchProfile()
            .then((profile) => {
                this.setState({
                    name: profile.name,
                    email: profile.email,
                    aboutShort: profile.aboutShort,
                    description: profile.description,
                    avatarUrl: profile.image,
                    errorName: false,
                    errorUrl: false,
                    errorDescription: false
                })
            })
    }

    getTextValue = (event, stateName) => {
        let stateObj;
        const inputValue = event.target.value;

        if (stateName === 'name') {
            if (!inputValue.includes("http") && inputValue.length >= 3 && inputValue.length <= 30 && !inputValue.includes("<") && !inputValue.includes("www")) {
                stateObj = {
                    // ...this.state,
                    name: event.target.value,
                    errorName: false
                }
            } else {
                stateObj = {
                    // ...this.state,
                    name: event.target.value,
                    errorName: true
                }
            }
        } else {
            if (!inputValue.includes("http") && inputValue.length >= 3 && !inputValue.includes("<") && !inputValue.includes("www")) {
                stateObj = {
                    // ...this.state,
                    description: event.target.value,
                    errorDescription: false
                }
            } else {
                stateObj = {
                    // ...this.state,
                    description: event.target.value,
                    errorDescription: true
                }
            }
        }

        this.setState(stateObj);
        console.log(this.state);
    }

    getAvatarUrl = (event) => {
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
                avatarUrl: event.target.value,
                errorUrl: false
            }
        } else {
            stateObj = {
                avatarUrl: event.target.value,
                errorUrl: true
            }
        }
        this.setState(stateObj)
    }

    render() {
        let error;
        if (this.state.errorName || this.state.errorUrl || this.state.errorDescription) {
            error = true;
        } else {
            error = false;
        }

        return (
            <div className="modal fade" id="editProfile" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0 p-2">
                            <h5 className="modal-title" id="exampleModalLongTitle">Update profile</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeEditProfileHandler}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body p-2">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12">
                                        <img className="my-0 mx-auto w-100" src={this.state.errorUrl ? "http://thepalmsofmobay.com/admin/framework/img/user2-160x160.jpg" : this.state.avatarUrl} alt="Generic placeholder" />
                                        <button type="button" className="btn btn-primary mt-2">UPLOAD PHOTO</button>
                                    </div>
                                    <div className="col-md-8 col-sm-12 mt-4">
                                        <label htmlFor="user-name" className="col-form-label">Name:</label>
                                        <input type="text" className={this.state.errorName ? "form-control alertInputName" : "form-control"} onChange={(event) => { this.getTextValue(event, 'name') }} value={this.state.name} id="user-name" />
                                        <p className="alertParagraph">{this.state.errorName ? `${this.state.name.length}/30` : ""}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label htmlFor="avatar-url" className="col-form-label">Avatar URL:</label>
                                        <input type="text" className={this.state.errorUrl ? "form-control alertInputUrl" : "form-control"} onChange={this.getAvatarUrl} aria-label="Username" value={this.state.avatarUrl} id="avatar-url" />
                                        <p className="alertParagraph">{this.state.errorUrl ? "Error input" : ""}</p>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="user-description" className="col-form-label">Description:</label>
                                        <input type="text" className={this.state.errorDescription ? "form-control alertInputDescription" : "form-control"} onChange={(event) => { this.getTextValue(event, 'description') }} value={this.state.description} id="user-description" />
                                        <p className="alertParagraph">{this.state.errorDescription ? "Error input" : ""}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-0 p-2">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeEditProfileHandler}>CLOSE</button>
                            <button type="button" className={error ? "btn btn-primary disabled" : "btn btn-primary"} onClick={error ? null : this.editProfileHandler} data-toggle={error ? "" : "modal"} data-target="#editProfile">UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {
    EditProfile
}
