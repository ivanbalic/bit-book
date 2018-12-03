import React from 'react';



import './PeoplePage.css'


const PeopleItem = ({ user }) => {
    const { image, name, aboutShort } = user;
    return (
        <div class="media userContainer">

            <img className="rounded-circle peopleImage" src={image} alt="Generic placeholder image" />

            <div className="media-body p-1">
                <h5 className="mt-0 pl-5">{name}</h5>
                <span className="w-75 d-inline-block pl-5">{aboutShort}</span><span className="w-25 d-inline-block pl-2">Last post:{user.getPostTime()}</span>
            </div>
        </div>
    )

}

export { PeopleItem };