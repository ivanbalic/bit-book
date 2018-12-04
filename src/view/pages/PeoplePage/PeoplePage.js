import React, { Component } from 'react';
import { userService } from '../../../services/user-service/user-service';

import { PeopleList } from './PeopleList';
import { SearchBar } from './SearchBar';

import './PeoplePage.css'


class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: "",
            searchInput: ""
        }
    }

    fetchUsers = () => {

        userService.fetchUsers()
            .then(users => {
                this.setState({ users })
            })
    }


    searchEventHandler = (inputValue) => {
        this.setState({ searchInput: inputValue })
    }


    componentDidMount() {
        this.fetchUsers();
    }


    render() {

        if (!this.state.users) {
            return <h1>loading</h1>
        }
        const filteredUsers = this.state.users.filter(user => {
            return user.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
        })

        return (

            <>
                <SearchBar onSearchChange={this.searchEventHandler} />
                <PeopleList users={filteredUsers} />
            </>
        );
    }
}

export default PeoplePage;