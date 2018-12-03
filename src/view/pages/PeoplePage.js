import React, { Component } from 'react';
import { userService } from '../../services/user-service/user-service';


class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
        }
    }

    fetchUser = () => {

        userService.fetchUsers()
            .then(users => {
                this.setState({ users })
                console.log(this.state.users)
            })
    }


    componentDidMount() {
        this.fetchUser();
    }


    render() {
        return (
            <p>hello from people page</p>
        );
    }
}

export default PeoplePage;