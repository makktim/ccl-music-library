import React, {useContext} from 'react';
import {SongContext} from "../../context/SongContext";

const UserDetails = ({usersData}) => {



    return (
            <div className="user">
                <div className="username">
                    <p>{usersData.userName}</p>
                    <p className="firstname"> {usersData.firstName} </p>
                    <p className="lastname"> {usersData.lastName}</p>
                    <p className="email"> {usersData.email} }</p>
                </div>

            </div>

    );
};

export default UserDetails;