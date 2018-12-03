import React, { Component } from 'react';
import { userService } from '../../../services/user-service/user-service';

import { PeopleList } from './PeopleList';
import './PeoplePage.css'


class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: "",
        }
    }

    fetchUser = () => {

        userService.fetchUsers()
            .then(users => {
                this.setState({ users })
            })
    }


    componentDidMount() {
        this.fetchUser();
    }


    render() {
        if (!this.state.users) {
            return <h1>loading</h1>
        }

        return (
            <>
                <input class="form-control mt-5 w-100" type="text" placeholder="Search" aria-label="Search"></input>
                <PeopleList users={this.state.users} />
            </>
        );
    }
}

export default PeoplePage;