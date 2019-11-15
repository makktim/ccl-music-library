import React, {useContext} from 'react';
import {SongContext} from '../context/SongContext';
import music from "../images/music_logo.png"

const AllListSongDetails = ({apiSongs}) => {
    const {addSong} = useContext(SongContext);

    return (
        <li>
            <div className="music-info">
                <div className="music-img">
                    <img src={music} alt=""/>
                </div>
                <div className="title">
                    <button className="add-btn" onClick={() => addSong(apiSongs.title, apiSongs.album, apiSongs.performer, apiSongs.length)}>+</button>
                    <h3>{apiSongs.title}</h3>
                    <p> {apiSongs.performer} {apiSongs.album}</p>
                    <p className="music-time"> time: {apiSongs.length}</p>
                </div>
            </div>
        </li>


    );
};

export default AllListSongDetails;