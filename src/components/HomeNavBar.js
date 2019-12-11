import React, {useContext,useState} from 'react';
import {SongContext} from '../context/SongContext';
import {Link} from "react-router-dom";

const HomeNavBar = () => {
    const {searchSong} = useContext(SongContext);

    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        searchSong(search);
        setSearch('');

    };

    return (
        <div className='navbar'>
            <h1>Best musics List</h1>
            <Link to="/list">MyList</Link>
            <p>Search your favourite music!</p>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="Search.." name="search" value={search} onChange={(e) => setSearch(e.target.value)} required />
                <input type="submit" value="search" />
            </form>
        </div>
    );
}

export default HomeNavBar;