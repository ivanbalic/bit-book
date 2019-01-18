import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const logoutHandler = () => {
        sessionStorage.clear();
    }

    return (
        <header className="container-fluid primary-color navbar-dark">
            <nav className="navbar navbar-expand-lg navbar-dark primary-color container">
                <Link className="navbar-brand" to="/feed">BIT <i className="fas fa-book-open"></i> BOOK</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/feed"><i className="fas fa-newspaper"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/people"><i className="fas fa-users"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/profile/${sessionStorage.getItem("userId")}`}><i className="fas fa-user"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/`} onClick={logoutHandler}><i className="fas fa-sign-out-alt"></i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )

}

export { Header };