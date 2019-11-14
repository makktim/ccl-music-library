import React, { useContext} from 'react';
import { SongContext } from '../context/SongContext';
import AllListSongDetails from './AllListSongDetails';

const AllMusicList = () => {
    const {songs} = useContext(SongContext);


    return(
        songs.length ? (
            <div className="book-list">
                <ul>
                    {songs.map((songs) => {
                        return (
                            <AllListSongDetails songs={songs} key={songs.id} /> );
                    })}
                </ul>
            </div>
        ) : (
            <div className = "empty">No Music on your list.</div>
        )
    )
}

export default AllMusicList;