import React, { useContext} from 'react';
import { SongContext } from '../context/SongContext';
import AllListSongDetails from './AllListSongDetails';

const AllMusicList = () => {
    const {apiSongs} = useContext(SongContext);


    return(
        apiSongs.length ? (
            <div className="book-list">
                <ul>
                    {apiSongs.map((apiSongs) => {
                        return (
                            <AllListSongDetails apiSongs={apiSongs} key={apiSongs.id} /> );
                    })}
                </ul>
            </div>
        ) : (
            <div className = "empty">No Music on your list.</div>
        )
    )
}

export default AllMusicList;