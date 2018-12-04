import React, { Component } from 'react';

import { userService } from '../../../services/user-service/user-service';

import './EditProfile.css';

class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            email: null,
            aboutShort: null,
            description: null,
            avatarUrl: null,
            buttonClass: "btn btn-primary disabled",
            error: true,
        }
    }

    componentDidMount() {
        userService.fetchProfile()
            .then((profile) => {
                this.setState({
                    name: profile.name,
                    email: profile.email,
                    aboutShort: profile.aboutShort,
                    description: profile.about,
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
                this.props.fetchProfile();
            });
    }

    getTextValue = (event, stateName) => {
        let stateObj;
        const inputValue = event.target.value;
        if (!inputValue.includes("http") && inputValue.length >= 3 && inputValue.length <= 30 && !inputValue.includes("<") && !inputValue.includes("www")) {
            stateObj = {
                // ...this.state,
                [stateName]: event.target.value,
                error: true,
                buttonClass: "btn btn-primary",
            }
        } else {
            stateObj = {
                // ...this.state,
                [stateName]: event.target.value,
                error: false,
                buttonClass: "btn btn-primary disabled",
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
                error: true,
                buttonClass: "btn btn-primary",
            }
        } else {
            stateObj = {
                avatarUrl: event.target.value,
                error: false,
                buttonClass: "btn btn-primary disabled",
            }
        }
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="modal fade" id="editProfile" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0 p-2">
                            <h5 className="modal-title" id="exampleModalLongTitle">Update profile</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body p-2">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12">
                                        <img className="my-0 mx-auto w-100" src={this.state.error ? this.state.avatarUrl : "http://thepalmsofmobay.com/admin/framework/img/user2-160x160.jpg"} alt="Generic placeholder" />
                                        <button type="button" className="btn btn-primary mt-2">UPLOAD PHOTO</button>
                                    </div>
                                    <div className="col-md-8 col-sm-12">
                                        <input type="text" className={this.state.error ? "form-control my-3" : "form-control my-3 alertInput"} placeholder="Name" onChange={(event) => { this.getTextValue(event, 'name') }} />
                                        <p className="alertParagraph">{this.state.error ? "" : `${this.state.name.length}/30`}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" className={this.state.error ? "form-control col-11 m-3" : "form-control col-11 m-3 alertInput"} value={this.state.inputValue} onChange={this.getAvatarUrl} placeholder="Post image" aria-label="Username" />
                                        <p className="alertParagraph">{this.state.error ? "" : "Error input"}</p>
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" className={this.state.error ? "form-control my-3" : "form-control my-3 alertInput"} placeholder="Description" onChange={(event) => { this.getTextValue(event, 'description') }} />
                                        <p className="alertParagraph">{this.state.error ? "" : "Error input"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-0 p-2">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">CLOSE</button>
                            <button type="button" className={this.state.buttonClass} onClick={this.editProfileHandler} data-toggle={this.state.error ? "modal" : ""} data-target="#editProfile">UPDATE</button>
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
