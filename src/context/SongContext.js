import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SongContext = createContext({});

const BookContextProvider = (props) => {

  const [songs, setSongs] = useState([]);
  const [apiSongs, setApiSongs] = useState([]);
  const [searchSongs, setSearchSongs] = useState([]);
  const [userData, setUserData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [userName, setUserName] = useState([]);

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


  const searchSong = (search) => {
    axios.get(`http://localhost:8080/songs/search/${search}`, search)
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

  const showUserData = (id) =>{
    console.log(id);
    axios.post(`http://localhost:8080/user/${id}`, id
    ).then(userData => {
      console.log(userData);
      setUserData(userData)
    }).catch(err => console.log(err));
  };

  const addNewUser = (user) =>{
    console.log(user);
    axios.post('http://localhost:8080/user/add', user
    ).then(user => {
      console.log(user);
    }).catch(err => console.log(err));

  };

  const addUser = (userName,password,firstName,lastName, email) => {
    setUserName(userName);
    addNewUser({userName,password,firstName,lastName, email});
  };

    const loginUser = (userCredentials) =>{
        console.log(userCredentials);
        axios.post('http://localhost:8080/auth/signin', userCredentials
        ).then(token => {
            console.log(token);
            setUserName(token.data.username);
        }).catch(err => console.log(err));
    };

    const newUserCredentials = (username, password) => {
        const userCredentials = {
            username: username,
            password: password
        };
        console.log(userCredentials);
        loginUser(userCredentials)
    };

  return (
    <SongContext.Provider value={{ songs, apiSongs, searchSongs, userData, userName, usersData, getApiList, showUserData, showAllUser, addSong, deleteSong, searchSong, getList, addUser, addNewUser, newUserCredentials }}>
      {props.children}
    </SongContext.Provider>
  );
};
 
export default BookContextProvider;