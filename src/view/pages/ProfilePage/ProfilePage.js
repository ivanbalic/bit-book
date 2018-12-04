import React, { Component } from 'react';

import { userService } from '../../../services/user-service/user-service.js';

import './ProfilePage.css'

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myProfile: "",
        }
    }

    fetchProfile = () => {
        userService.fetchProfile()
            .then(myProfile => {
                this.setState({ myProfile })
                console.log(this.state.myProfile.image);
            })
    }


    componentDidMount() {
        this.fetchProfile()
    }


    render() {
        return (
            <>
                <div class="jumbotron">
                    <img src={this.state.myProfile.image} alt="profileImage" className="profileImage rounded-circle" />
                    <h1 class="display-4 text-center">{this.state.myProfile.name}</h1>
                    <hr className="my-4" />
                    <p className="text-center">{this.state.myProfile.description}</p>
                    <p className="lead text-center">
                        <a href="#!" className="btn btn-primary btn-lg m-3">{this.state.myProfile.postNumber} posts</a>
                        <a href="#!" className="btn btn-primary btn-lg">{this.state.myProfile.commentNumber} comments</a>
                    </p>
                </div>
            </>
        );
    }
}

export default ProfilePage;