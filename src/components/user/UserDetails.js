import React, {useContext} from 'react';
import {SongContext} from "../../context/SongContext";

const UserDetails = ({userData}) => {

    console.log(userData)


    return (
            <div className="user">
                <h1 className="title"> Hello {userData.userName} !</h1>
                <h3> This is your profile page</h3>
                <div className="username">
                    <p>Username: {userData.userName}</p>
                    <p className="firstname"> Firstname:{userData.firstName} </p>
                    <p className="lastname">Lastname: {userData.lastName}</p>
                    <p className="email"> E-mail:{userData.email} }</p>
                </div>

            </div>

    );
};

export default UserDetails;