import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SongContext = createContext();

const BookContextProvider = (props) => {

  const [songs, setSongs] = useState([]);

  useEffect(() =>
      fetch('http://localhost:8080/songs/list')
          .then(res => res.json())
          .then(res => setSongs(res)),[setSongs]
  );


  const addSong = (title,album,performer,length) => {
    setSongs([...songs, {title,album,performer,length}]);
  };

  const removeSong = (song) =>{
    console.log(song);
    axios.post('http://localhost:8080/songs/delete', song
    ).then(song => {
      console.log(song);
    }).catch(err => console.log(err));
  };

  const deleteSong = (title,performer) => {
    setSongs(songs.filter(songs => songs.title !== title ));
    const song = {
      title: title,
      performer: performer,
    };
    removeSong(song)
  };


  // const removeBook = (title, performer) => {
  //   setSongs(songs.filter(songs => songs.title !== title ));
  //   axios.delete(`http://localhost:8080/songs/${title}/${performer}`, performer)
  //       .then(songs => {
  //         console.log(songs);
  //       }).catch(err => console.log(err));
  // };

  return (
    <SongContext.Provider value={{ songs, addSong, deleteSong }}>
      {props.children}
    </SongContext.Provider>
  );
}
 
export default BookContextProvider;