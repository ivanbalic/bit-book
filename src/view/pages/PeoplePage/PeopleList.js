import React from 'react';


import './PeoplePage.css'
import { PeopleItem } from './PeopleItem';


const PeopleList = ({ users }) => {

    const listOfPeople = users.map((user) => {
        return <PeopleItem user={user} />
    });

    return (
        <>
            {listOfPeople}
        </>
    )

}

export { PeopleList };