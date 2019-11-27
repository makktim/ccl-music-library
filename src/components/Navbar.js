import React, { useContext} from 'react';
import { SongContext} from '../context/SongContext';

const NavBar = () => {
    const { songs } = useContext(SongContext);
    const { showUserData } = useContext(SongContext);

    return (
        <div className='navbar'>
            <button onClick={() => showUserData('testUser')}>testUser</button>
            <h1>My music list</h1>
            <a href="/">HomePage</a>
            <p>Currently you have {songs.length} music on your list!</p>
        </div>
    );
}

export default NavBar;