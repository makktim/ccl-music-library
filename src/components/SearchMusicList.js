import React, { useContext} from 'react';
import { SongContext } from '../context/SongContext';
import SearchListSongDetails from './SearchListSongDetails';

const SearchMusicList = () => {
    const {searchSongs} = useContext(SongContext);


    return(
        searchSongs.length ? (
            <div className="book-list">
                <ul>
                    {searchSongs.map((searchSongs) => {
                        return (
                            <SearchListSongDetails searchSongs={searchSongs} key={searchSongs.id} /> );
                    })}
                </ul>
            </div>
        ) : (
            <div className = "empty">No Music on your list.</div>
        )
    )
}

export default SearchMusicList;