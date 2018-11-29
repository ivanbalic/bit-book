import React, { Component } from 'react';

class SinglePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
        }
    }

    render() {
        return (
            <p>Single Post Page</p>
        );
    }
}

export default SinglePostPage;