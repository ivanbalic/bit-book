import React, { Component } from 'react';

class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
        }
    }

    render() {
        return (
            <p>hello from people page</p>
        );
    }
}

export default PeoplePage;