import React from 'react';

const Header = () => {
    return (
        <header className="container-fluid bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
                <a className="navbar-brand" href="#!">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Feed</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">People</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Profile</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )

}

export { Header };