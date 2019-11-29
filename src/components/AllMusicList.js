import React, { useContext, useEffect} from 'react';
import { SongContext } from '../context/SongContext';
import AllListSongDetails from './AllListSongDetails';

const AllMusicList = () => {
    const {apiSongs, getApiList} = useContext(SongContext);


    useEffect(() => {
      getApiList();

    }, []);


    return(
        apiSongs.length ? (
            <div className="book-list">
                <ul className="book-list">
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