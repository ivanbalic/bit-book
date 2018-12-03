import React from 'react';

import { Link } from 'react-router-dom';


import './PeoplePage.css'


const PeopleItem = ({ user }) => {
    const { id, image, name, aboutShort } = user;

    return (
        <div className="media userContainer">

            <img className="rounded-circle peopleImage" src={image} alt="Generic placeholder" />

            <div className="media-body p-1">
                <h5 className="mt-0 pl-5">{name}</h5>
                <span className="w-75 d-inline-block pl-5">{aboutShort}</span><span className="w-25 d-inline-block pl-2">Last post:{user.getPostTime()}</span>
            </div>
        </div>
    )

}

export { PeopleItem };