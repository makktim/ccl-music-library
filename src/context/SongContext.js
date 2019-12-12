import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SongContext = createContext({});

const BookContextProvider = (props) => {

    const [songs, setSongs] = useState([]);
    const [apiSongs, setApiSongs] = useState([]);
    const [searchSongs, setSearchSongs] = useState([]);
    const [userData, setUserData] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const [userName, setUserName] = useState('');
    const [ token, setToken] = useState([]);
    const [ userLoggedIn, setUserLoggedIn] = useState(true);
    const [vote, setVote] = useState([]);


    const getVoteBySongId = async (songId) => {
        axios.get(`http://localhost:8762/voteservice/vote/${songId}`)
            .then(vote =>{
                    setVote(vote.data);
            }).catch(err =>console.log(err));
    }

    const getList = async () => {
        console.log(token);
        console.log(userName);
        axios.get(`http://localhost:8762/musicservice/songs/user/${userName}`)
            .then(userSongs => {
                console.log(userSongs.data);
                setSongs(userSongs.data);
            }).catch(err =>console.log(err))
    };

    const getApiList = async () => {
        axios.get('http://localhost:8762/musicservice/songs')
            .then(songs => {
                console.log(songs.data);
                setApiSongs(songs.data);
                userLoggedIn(false);
            }).catch(err =>console.log(err))
    };


    const searchSong = (search) => {
        axios.get(`http://localhost:8762/musicservice/songs/search/${search}`, search)
            .then(search => {
                console.log(search);
                setSearchSongs(search);
            }).catch(err =>console.log(err))
    };

    const addVote = (songId) => {
        axios.post(`http://localhost:8762/voteservice/vote/${songId}`, 0)
            .then(vote => {
                console.log(vote);
            }).catch(err =>console.log(err))
    };


    const modifyVote = (vote, songId) => {
        axios.put(`http://localhost:8762/voteservice/vote/${songId}`, vote)
            .then(vote => {
                console.log(vote);
            }).catch(err => console.log(err));
    };

    const addNewSong = (song) =>{
        console.log(song);
        axios.post(`http://localhost:8762/musicservice/songs/user/${userName}`,song)
            .then(song => {
                console.log(song);
                addVote(song.id);
                getList();
            }).catch(err => console.log(err));
    };

    const addSong = (title,album,performer,length) => {
        addNewSong({title,album,performer,length});
    };

    const deleteSong = (id) => {
        console.log(id);
        setSongs(songs.filter(songs => songs.id !== id ));
        axios.delete(`http://localhost:8762/musicservice/songs/user/${userName}/song/${id}`)
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

    const myLogin = () => {
        setUserLoggedIn(false);
    };

    const loginUser = (value) => {
        axios.post('http://localhost:8762/auth/signin', value
        ).then(value => {
            const username = value.data.username;
            setUserName(username);
            setUserLoggedIn(true);
            console.log(username);
            storageToken(value);
        })
            .catch(err => console.log(err));
    };

    const logOut = () => {
        setUserLoggedIn(true);
        console.log(setUserLoggedIn)
        // setToken("");
        // localStorage.setItem("token" , " ");
        // axios.defaults.headers.common = {
        //     "Access-Control-Allow-Origin" : "*",
        //     "Content-Type" :  "application/json",
        //     "cache-control": "no-cache",
        //     "Authorization": " ",
        //     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        //
        // };
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
                userLoggedIn,
                token,
                vote,
                modifyVote,
                getVoteBySongId,
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
                myLogin,
                logOut,
                newUserCredentials
            }
        }>
            {props.children}
        </SongContext.Provider>
    );
};

export default BookContextProvider;

