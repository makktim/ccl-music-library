import React, {useContext} from 'react';
import {SongContext} from '../context/SongContext';
import music from "../images/music_logo.png"
import trash from "../images/delete.png";
import {Link} from "react-router-dom";


const SongDetails = ({songs}) => {

    const {deleteSong, getCommentsBySongId} = useContext(SongContext);

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
                <img className="trash" onClick={() => deleteSong(songs.id)} src={trash} alt=""/>
                <Link to = "/comments" className="comment" onClick ={() => getCommentsBySongId(songs.id)}>Comment</Link>
            </div>
        </li>


    );
};

export default SongDetails;