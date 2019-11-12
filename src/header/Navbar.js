import React from 'react';
import './Navbar.css';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><a className="active" href="#library">Music Library</a></li>
                <li><a href="#top">Top Songs</a></li>
            </ul>
        </div>

    )
};

export default NavBar;