import React from 'react';
import './Navbar.css';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><a className="active" href="#home">Music Library</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>

    )
};
export default NavBar;