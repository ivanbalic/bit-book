import React, { Component } from 'react';

import { userService } from '../../../services/user-service/user-service';
import { validationService } from '../../../services/validation-service/validationService';

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
            errorDescription: false,
            buttonClass: 'btn btn-primary disabled'
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
                if (response.status >= 200 && response.status < 300) {
                    
                    this.props.fetchProfile(this.props.userId);
                }
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

            if (validationService.isNameCorrect(inputValue)) {
                stateObj = {
                    name: event.target.value,
                    errorName: false,
                    buttonClass: 'btn btn-primary'
                }
            } else {
                stateObj = {
                    name: event.target.value,
                    errorName: true,
                    buttonClass: 'btn btn-primary disabled'
                }
            }
        } else {

            if (validationService.isTextCorrect(inputValue)) {
                stateObj = {
                    description: event.target.value,
                    errorDescription: false,
                    buttonClass: 'btn btn-primary'
                }
            } else {
                stateObj = {
                    description: event.target.value,
                    errorDescription: true,
                    buttonClass: 'btn btn-primary disabled'
                }
            }
        }

        this.setState(stateObj);
    }

    getAvatarUrl = (event) => {
        let stateObj;

        if (validationService.isImageUrlCorrect(event.target.value)) {
            stateObj = {
                avatarUrl: event.target.value,
                errorUrl: false,
                buttonClass: 'btn btn-primary'
            }
        } else {
            stateObj = {
                avatarUrl: event.target.value,
                errorUrl: true,
                buttonClass: 'btn btn-primary disabled'
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
                            <button type="button" className={this.state.buttonClass} onClick={error ? null : this.editProfileHandler} data-toggle={error ? "" : "modal"} data-target="#editProfile">UPDATE</button>
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
