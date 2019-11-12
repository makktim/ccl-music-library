import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

export const MusicContext = createContext();

const MusicContextProvider = (props) => {

    const [songs, setMusic] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/songs/list')
            .then(songs => {console.log(songs)})
            .then(songs => setMusic({songs}));
            }, []);

    const addMusic = (title, album, performer, length) => {
        setMusic([...songs, {title, album, performer, length}]);
    };
    const removeMusic = (title) => {
        setMusic(songs.filter(songs => songs.title !== title));
    };

    return (
        <MusicContext.Provider value={{ songs: songs, addMusic, removeMusic }}>
            {props.children}
        </MusicContext.Provider>
    );
};

export default MusicContextProvider;

