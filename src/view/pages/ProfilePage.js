import React, { Component } from 'react';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
        }
    }

    render() {
        return (
            <p>hello from profile page</p>
        );
    }
}

export default ProfilePage;