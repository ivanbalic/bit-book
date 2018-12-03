import React, { Component } from 'react';
import * as profileService from '../../../services/profile-service/profileService';


import './ProfilePage.css'

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myProfile: "",
        }
    }

    fetchProfile = () => {
        profileService.fetchProfile()
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
                {/* <div className="card col-2 offset-5 border-0">
                    <img className="rounded-circle w-100" src={this.state.myProfile.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-center">{this.state.myProfile.fullName}</h5>
                        <p className="card-text text-center">{this.state.myProfile.description}</p>
                        <a href="#!" className="btn btn-primary btn-lg">{this.state.myProfile.postNumber} posts</a>
                        <a href="#!" className="d-flex justify-content-center">{this.state.myProfile.commentNumber} comments</a>
                    </div>
                </div> */}
                <div class="jumbotron">
                    <img src={this.state.myProfile.image} className="profileImage rounded-circle" />

                    <h1 class="display-4 text-center">{this.state.myProfile.fullName}</h1>
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