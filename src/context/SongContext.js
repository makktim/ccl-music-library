import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SongContext = createContext({});

const BookContextProvider = (props) => {

  const [songs, setSongs] = useState([]);
  const [apiSongs, setApiSongs] = useState([]);
  const [searchSongs, setSearchSongs] = useState([]);
  const [userData, setUserData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [userName, setUserName] = useState([]);
  const [userId, setUserId] = useState([]);
  const [ token, setToken] = useState([]);


  const getList = async (id) => {
      console.log(token)
      axios.defaults.headers.common = {
          "Authorization": 'Bearer ' + token
      };
      axios.get(`http://localhost:8080/songs/list/${id}`, userId)
          .then(userSongs => {
              console.log(userSongs.data);
              setSongs(userSongs.data);
          }).catch(err =>console.log(err))
  };

  const getApiList = async () => {
      axios.get('http://localhost:8080/songs')
          .then(songs => {
              console.log(songs.data);
              setApiSongs(songs.data);
          }).catch(err =>console.log(err))
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
    axios.post('http://localhost:8080/songs/add', song //Todo: Change url of  this route
    ).then(song => {
      console.log(song);
      getList();
    }).catch(err => console.log(err));
  };

  const addSong = (title,album,performer,length) => {
    addNewSong({title,album,performer,length});
  }; // Todo : Refactorate - multiply addNewSong and addSong

  const deleteSong = (id) => {
    console.log(id);
    setSongs(songs.filter(songs => songs.id !== id ));
      axios.delete(`http://localhost:8080/songs/${id}`, id) //Todo: Change url of  this route
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
    axios.get(`http://localhost:8080/user/${id}`, id
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
  }; // Todo : Refactorate - multiply addNewUser and addUser

    const loginUser = (value) => {
        axios.post('http://localhost:8080/auth/signin', value
        ).then(value => {
            console.log(value);
            setUserId(value);
            storageToken(value);
        })
            .catch(err => console.log(err));
    };

    const storageToken = (value) => {
        console.log(value);
        console.log("storage " + value.data.token);
        const token = value.data.token;
        setToken(token);
        localStorage.setItem("token" , "Bearer " +token);
        axios.defaults.headers.common = {
            "Access-Control-Allow-Origin" : "*",
            "Content-Type" :  "application/json",
            "cache-control": "no-cache",
            "Authorization": "Bearer " +token,
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"

        };
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
    <SongContext.Provider value={
        {
            songs,
            apiSongs,
            searchSongs,
            userData,
            userName,
            usersData,
            token,
            getApiList,
            storageToken,
            showUserData,
            showAllUser,
            addSong,
            deleteSong,
            searchSong,
            getList,
            addUser,
            addNewUser,
            newUserCredentials
        }
    }>
      {props.children}
    </SongContext.Provider>
  );
};
 
export default BookContextProvider;