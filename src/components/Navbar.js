import React, { useContext} from 'react';
import { SongContext} from '../context/SongContext';
import {Link} from "react-router-dom";

const NavBar = () => {
    const { songs } = useContext(SongContext);

    return (
        <div className='navbar'>
            <h1>My music list</h1>
            <Link to="/">HomePage</Link>
            <p>Currently you have {songs.length} music on your list!</p>
        </div>
    );
}

export default NavBar;