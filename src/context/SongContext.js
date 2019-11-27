import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SongContext = createContext({});

const BookContextProvider = (props) => {

  const [songs, setSongs] = useState([]);
  const [apiSongs, setApiSongs] = useState([]);
  const [searchSongs, setSearchSongs] = useState([]);
  const [userData, setUserData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  const getList = async () => {
    fetch('http://localhost:8080/songs/list')
        .then(res => res.json())
        .then(res => setSongs(res))
  };

  const getApiList = async () => {
    fetch('http://localhost:8080/songs')
        .then(res => res.json())
        .then(res => setApiSongs(res))
  };

  // useEffect(() => {
  //   searchSong();
  //
  // }, [setSearchSongs]);

  // useEffect(() => {
  //   showUserData();
  //
  // }, [setUserData]);



  const searchSong = (search) => {
    axios.get('http://localhost:8080/songs/'+search)
        .then(search => {
          console.log(search);
          setSearchSongs(search);
        }).catch(err =>console.log(err))
  };

  const addNewSong = (song) =>{
    console.log(song);
    axios.post('http://localhost:8080/songs/add', song
    ).then(song => {
      console.log(song);
      getList();
    }).catch(err => console.log(err));
  };

  const addSong = (title,album,performer,length) => {
    addNewSong({title,album,performer,length});
  };

  const deleteSong = (id) => {
    console.log(id);
    setSongs(songs.filter(songs => songs.id !== id ));
      axios.delete(`http://localhost:8080/songs/${id}`, id)
          .then(songs => {
            console.log(songs);
          }).catch(err => console.log(err));
  };

  const showAllUser = () =>{
    axios.get(`http://localhost:8080/user/list`
    ).then(allUserData => {
      console.log("all: ", allUserData.data);
      setUsersData(allUserData.data)
    }).catch(err => console.log(err));
  };

  const showUserData = (username) =>{
    console.log(username);
    axios.post(`http://localhost:8080/user/${username}`, username
    ).then(userData => {
      console.log(userData)
      setUserData(userData)
    }).catch(err => console.log(err));
  };

  return (
    <SongContext.Provider value={{ songs, apiSongs, searchSongs, userData, usersData, getApiList, showUserData, showAllUser, addSong, deleteSong, searchSong, getList }}>
      {props.children}
    </SongContext.Provider>
  );
}
 
export default BookContextProvider;