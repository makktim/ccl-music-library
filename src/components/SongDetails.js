import React, {useContext} from 'react';
import {SongContext} from '../context/SongContext';
import music from "../images/music_logo.png"
import trash from "../images/delete.png";

const SongDetails = ({songs}) => {

    const {createSongForDelete} = useContext(SongContext);

    return (
        <li>
            <div className="music-info">
                <div className="music-img">
                    <img src={music} alt=""/>
                </div>
                <div className="title">
                    <h2>{songs.title}</h2>
                    <p className="performer"> {songs.performer}</p>
                    <p className="album"> {songs.album}</p>
                    <p className="music-time"> time: {songs.length}</p>
                </div>
                <img className="trash" onClick={() => createSongForDelete(songs.id, songs.title, songs.album, songs.performer, songs.length)} src={trash} alt=""/>
            </div>
        </li>


    );
};

export default SongDetails;