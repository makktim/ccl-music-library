import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SongContext = createContext();

const BookContextProvider = (props) => {

  const [songs, setSongs] = useState([]);

  const getList = async () => {
    fetch('http://localhost:8080/songs/list')
        .then(res => res.json())
        .then(res => setSongs(res))
  };

  useEffect(() => {
    getList();

  }, [setSongs]);

  const searchSong = (search) => {
    console.log(search)
  };

  const addSong = (title,album,performer,length) => {
    setSongs([...songs, {title,album,performer,length}]);
  };

  const deleteSong = (id) => {
    console.log(id);
    setSongs(songs.filter(songs => songs.id !== id ));
      axios.delete(`http://localhost:8080/songs/${id}`, id)
          .then(songs => {
            console.log(songs);
          }).catch(err => console.log(err));
  };

  return (
    <SongContext.Provider value={{ songs, addSong, deleteSong, searchSong }}>
      {props.children}
    </SongContext.Provider>
  );
}
 
export default BookContextProvider;