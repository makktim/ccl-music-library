import React, {useContext} from 'react';
import {SongContext} from '../context/SongContext';
import music from "../images/music_logo.png"

const SearchListSongDetails = ({searchSongs}) => {
    const {addSong} = useContext(SongContext);

    return (
        <li>
            <div className="music-info">
                <div className="music-img">
                    <img src={music} alt=""/>
                </div>
                <div className="title">
                    <button className="add-btn" onClick={() => addSong(searchSongs.title, searchSongs.album, searchSongs.performer, searchSongs.length)}>+</button>
                    <h3>{searchSongs.title}</h3>
                    <p> {searchSongs.performer} {searchSongs.album}</p>
                    <p className="music-time"> time: {searchSongs.length}</p>
                </div>
            </div>
        </li>


    );
};

export default SearchListSongDetails;