import React, {useContext} from 'react';
import {SongContext} from "../../context/SongContext";

const AllUserDetails = ({usersData}) => {

    const { showUserData } = useContext(SongContext);

    return (
        <li>
            <div className="music-info">
                <div className="title">
                    <h2 onClick={() => showUserData(usersData.id)}>Username: {usersData.userName} </h2>
                    <p className="performer"> Firstname: {usersData.firstName}</p>
                    <p className="album">Lastname: {usersData.lastName}</p>
                    <p className="music-time"> E-mail: {usersData.email}</p>
                </div>
            </div>
        </li>


    );
};

export default AllUserDetails;