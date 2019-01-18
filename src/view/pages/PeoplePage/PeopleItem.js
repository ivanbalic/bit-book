import React from 'react';

import { Link } from 'react-router-dom';


import './PeoplePage.css'


const PeopleItem = ({ user }) => {
    const { id, image, name, aboutShort } = user;

    const lastPost = user.getPostTime();
    const showLastPost = lastPost ? `Last post: ${lastPost}` : 'no posts form this user';

    return (
        <Link to={`/profile/${id}`} className="item-link">
            <div className="media userContainer element-bg radius item-decoration">
                <div className="border-r pr-3">
                    <img className="rounded-circle peopleImage" src={image} alt="Generic placeholder" />
                </div>

                <div className="media-body p-1">
                    <h5 className="mt-0 pl-3">{name}</h5>
                    <span className="w-75 d-inline-block pl-5">{aboutShort}</span><span className="w-25 d-inline-block pl-2">{showLastPost}</span>
                </div>
            </div>
        </Link>
    )

}

export { PeopleItem };