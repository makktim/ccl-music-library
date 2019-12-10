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
    // fetch('http://localhost:8080/songs/list')
    //     .then(res => res.json())
    //     .then(res => setSongs(res))
      console.log(token)
      axios.defaults.headers.common = {
          "Authorization": 'Bearer ' + token
      };
      axios.get(`http://localhost:8762/musicservice/songs/list/${id}`, id)
          .then(userSongs => {
              console.log(userSongs.data);
              setSongs(userSongs.data);
          }).catch(err =>console.log(err))
  };

  const getApiList = async () => {
    // fetch('http://localhost:8080/songs')
    //     .then(res => res.json())
    //     .then(res => setApiSongs(res))
      axios.get('http://localhost:8762/musicservice/songs')
          .then(songs => {
              console.log(songs.data);
              setApiSongs(songs.data);
          }).catch(err =>console.log(err))
  };


  const searchSong = (search) => {
    axios.get(`http://localhost:8762/musicservice/songs/search/${search}`, search)
        .then(search => {
          console.log(search);
          setSearchSongs(search);
        }).catch(err =>console.log(err))
  };

  const addNewSong = (song) =>{
    console.log(song);
    axios.post('http://localhost:8762/musicservice/songs/add', song
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
      axios.delete(`http://localhost:8762/musicservice/songs/${id}`, id)
          .then(songs => {
            console.log(songs);
          }).catch(err => console.log(err));
  };

  const showAllUser = () =>{
    axios.get(`http://localhost:8762/musicservice/user/list`
    ).then(allUserData => {
      console.log("all: ", allUserData.data);
      setUsersData(allUserData.data)
    }).catch(err => console.log(err));
  };

  const showUserData = (id) =>{
    console.log(id);
    axios.get(`http://localhost:8762/musicservice/user/${id}`, id
    ).then(userData => {
      console.log(userData);
      setUserData(userData)
    }).catch(err => console.log(err));
  };

  const addNewUser = (user) =>{
    console.log(user);
    axios.post('http://localhost:8762/musicservice/user/add', user
    ).then(user => {
      console.log(user);
    }).catch(err => console.log(err));

  };

  const addUser = (userName,password,firstName,lastName, email) => {
    setUserName(userName);
    addNewUser({userName,password,firstName,lastName, email});
  };

    // const loginUser = (userCredentials) =>{
    //     console.log(userCredentials);
    //     axios.post('http://localhost:8080/auth/signin', userCredentials
    //     ).then(token => {
    //         localStorage.setItem('token', 'Bearer ' + token.data['token']);
    //         console.log(localStorage.getItem('token'));
    //         axios.defaults.headers.common = {
    //             "Authorization": localStorage.getItem('token')
    //         };
    //     }).catch(err => console.log(err));
    // };

    const loginUser = (value) => {
        axios.post('http://localhost:8762/musicservice/auth/signin', value
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
    <SongContext.Provider value={{ songs, apiSongs, searchSongs, userData, userName, usersData, token, getApiList, storageToken, showUserData, showAllUser, addSong, deleteSong, searchSong, getList, addUser, addNewUser, newUserCredentials }}>
      {props.children}
    </SongContext.Provider>
  );
};
 
export default BookContextProvider;