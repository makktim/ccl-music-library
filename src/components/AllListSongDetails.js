import React, {useContext} from 'react';
import {SongContext} from '../context/SongContext';
import music from "../images/music_logo.png"

const AllListSongDetails = ({songs}) => {
    const {addSong} = useContext(SongContext);

    return (
        <li>
            <div className="music-info">
                <div className="music-img">
                    <img src={music} alt=""/>
                </div>
                <div className="title">
                    <button className="add-btn" onClick={() => addSong(songs.title, songs.album, songs.performer, songs.length)}>+</button>
                    <h3>{songs.title}</h3>
                    <p> {songs.performer} {songs.album}</p>
                    <p className="music-time"> time: {songs.length}</p>
                </div>
            </div>
        </li>


    );
};

export default AllListSongDetails;