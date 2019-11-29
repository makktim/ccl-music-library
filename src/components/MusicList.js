import React, { useContext, useEffect} from 'react';
import { SongContext } from '../context/SongContext';
import SongDetails from './SongDetails';

const MusicList = () => {
    const {songs, getList, setSongs, storageToken, storage} = useContext(SongContext);

    useEffect(() => {
      getList();
        console.log(songs)

    }, []);

    return(
        songs.length ? (
            <div className="book-list">
                <ul>
                    {songs.map(songs => {
                        return (
                            <SongDetails songs={songs} key={songs.id} />);
                    })}
                </ul>
            </div>
        ) : (
            <div className = "empty">No Music on your list.</div>
        )
    )
}

export default MusicList;