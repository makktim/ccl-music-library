import React from 'react';
import music from "../images/music2.jpg"

const AllListSongDetails = ({songs}) => {
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
            </div>
        </li>


    );
};

export default AllListSongDetails;