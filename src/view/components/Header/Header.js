import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="container-fluid bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
                <Link className="navbar-brand" to="/">BITBOOK</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/feed">Feed</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/people">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/profile/${sessionStorage.getItem("mojid")}`}>Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )

}

export { Header };