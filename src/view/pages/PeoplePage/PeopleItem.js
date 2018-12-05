import React from 'react';

import { Link } from 'react-router-dom';


import './PeoplePage.css'


const PeopleItem = ({ user }) => {
    const { id, image, name, aboutShort } = user;

    const lastPost = user.getPostTime();
    const showLastPost = lastPost ? `Last post: ${lastPost}` : 'no posts form this user';

    return (
        <div className="media userContainer">

            <img className="rounded-circle peopleImage" src={image} alt="Generic placeholder" />

            <div className="media-body p-1">
                <Link to={`/profile/${id}`}><h5 className="mt-0 pl-5">{name}</h5></Link>
                <span className="w-75 d-inline-block pl-5">{aboutShort}</span><span className="w-25 d-inline-block pl-2">{showLastPost}</span>
            </div>
        </div>
    )

}

export { PeopleItem };