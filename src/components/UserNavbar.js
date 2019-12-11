import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {SongContext} from "../context/SongContext";
import axios from "axios";

const UserNavbar = () => {

    const { userLoggedIn, logOut, myLogin} = useContext(SongContext);

    console.log(userLoggedIn);
    // return(
    //     <div className='usernavbar'>
    //         <Link to="/" className="homeBtn">Home</Link>
    //         <Link to="/registration" className="registrationBtn">Registration</Link>
    //         <Link to="/login" onClick={() => myLogin()} className="loginBtn">Login</Link>
    //     </div>
    //
    // );

    return(
            userLoggedIn ? (
                <div className='usernavbar'>
                    <Link to="/" className="homeBtn">Home</Link>
                    <Link to="/registration" className="registrationBtn">Registration</Link>
                    <Link to="/login" onClick={() => myLogin()} className="loginBtn">Login</Link>
                </div>
            ) : (
                <div className='usernavbar'>
                    <Link to="/" className="homeBtn">Home</Link>
                    <Link to="/registration" className="registrationBtn">Registration</Link>
                    <Link to="/" onClick={() => logOut()} className="loginBtn">Logout</Link>
                </div>
            )

    );
}

export default UserNavbar