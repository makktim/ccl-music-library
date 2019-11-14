import React, {useContext} from 'react';
import {SongContext} from '../context/SongContext';
import music from "../images/music2.jpg"
import trash from "../images/trash.png";

const SongDetails = ({songs}) => {
    const {deleteSong} = useContext(SongContext);
    return (
        <li>
            <div className="music-info">
                <div className="music-img">
                    <img src={music} alt=""/>
                </div>
                <div className="title">
                    <h3>{songs.title}</h3>
                    <p> {songs.performer} {songs.album}</p>
                    <p className="music-time"> time: {songs.length}</p>
                </div>
                <img className="trash" onClick={() => deleteSong(songs.id)} src={trash} alt=""/>
            </div>
        </li>


    );
};

export default SongDetails;