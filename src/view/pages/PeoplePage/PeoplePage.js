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
            return (
                <div class="sk-folding-cube">
                    <div class="sk-cube1 sk-cube"></div>
                    <div class="sk-cube2 sk-cube"></div>
                    <div class="sk-cube4 sk-cube"></div>
                    <div class="sk-cube3 sk-cube"></div>
                </div>
            );
        }
        const filteredUsers = this.state.users.filter(user => {
            return user.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
        })

        return (

            <div className='col-10 offset-1'>
                <SearchBar onSearchChange={this.searchEventHandler} />
                <PeopleList users={filteredUsers} />
            </div>
        );
    }
}

export default PeoplePage;