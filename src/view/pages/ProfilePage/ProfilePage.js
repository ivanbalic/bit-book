import React, { Component } from 'react';

import { userService } from '../../../services/user-service/user-service.js';

import './ProfilePage.css'
import { EditProfile } from '../../components/EditProfile/EditProfile.js';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myProfile: {},
            userId: this.props.match.params.userId
        }
    }

    fetchProfile = (userId) => {
        userService.fetchSingleUser(userId)
            .then(myProfile => {
                this.setState({
                    myProfile,
                    userId: userId
                })
            })
    }

    componentDidUpdate(prevProps) {

        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.fetchProfile(this.props.match.params.userId)

        }
    }

    componentDidMount() {
        this.fetchProfile(this.props.match.params.userId)
    }



    render() {
        return (
            <>
            <EditProfile fetchProfile={this.fetchProfile} userId={this.state.userId} />
                <div className="jumbotron mt-5 col-10 mx-auto element-bg radius d-flex flex-column justify-content-center">
                    <img src={this.state.myProfile.image} alt="profileImage" className="profileImage rounded-circle" />
                    <h1 className="display-4 text-center">{this.state.myProfile.name}</h1>
                    {
                        this.state.userId === sessionStorage.getItem('userId') ?
                            <button className="btn button-active my-4 w-25 mx-auto" data-toggle="modal" data-target="#editProfile"><i className="fas fa-user-edit"></i></button>
                            : null
                    }
                    <p className="text-center border-t pt-4">{this.state.myProfile.description}</p>
                    <p className="lead text-center">
                        <button className="btn button-active btn-lg m-3 item-decoration">{this.state.myProfile.postNumber} posts</button>
                        <button className="btn button-active btn-lg item-decoration">{this.state.myProfile.commentNumber} comments</button>
                    </p>
                </div>
            </>
        );
    }
}

export default ProfilePage;
