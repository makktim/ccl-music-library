import React, {useContext, useEffect} from 'react';
import {SongContext} from '../context/SongContext';
import music from "../images/music_logo.png"
import trash from "../images/delete.png";

const SongDetails = ({songs}) => {

    const {deleteSong, getVoteBySongId, vote, modifyVote} = useContext(SongContext);

    useEffect(() => {
        getVoteBySongId(songs.id);
    }, []);

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
                    <p className="music-vote"> vote: {vote}</p>
                    <button onClick={() => modifyVote(-1, songs.id)}>Vote down</button>
                    <button onClick={() => modifyVote(0, songs.id)}> Unset vote</button>
                    <button onClick={() => modifyVote(1, songs.id)}> Vote up</button>
                </div>
                <img className="trash" onClick={() => deleteSong(songs.id)} src={trash} alt=""/>
            </div>
        </li>
    );
};

export default SongDetails;