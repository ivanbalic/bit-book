import React from 'react';

import './Footer.css';

const Footer = () => {

    return (
        <footer className='navbar-light bg-light'>
            <p className='container'>&copy;{new Date().getFullYear()} Four in for</p>
        </footer>
    );
}

export { Footer };