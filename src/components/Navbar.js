import React, { useContext} from 'react';
import { SongContext} from '../context/SongContext';

const NavBar = () => {
    const { songs } = useContext(SongContext);
    return (
        <div className='navbar'>
            <h1>My music list</h1>
            <a href="/">HomePage</a>
            <p>Currently you have {songs.length} music!</p>
        </div>
    );
}

export default NavBar;