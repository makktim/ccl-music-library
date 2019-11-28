import React, {useContext} from 'react';
import {SongContext} from "../../context/SongContext";
import {Link} from "react-router-dom";

const AllUserDetails = ({usersData}) => {

    const { showUserData } = useContext(SongContext);

    return (
        <li>
            <div className="music-info">
                <div className="title">
                    <Link to="/userpage">
                    <h2 onClick={() => showUserData(usersData.id)}>Username: {usersData.userName} </h2>
                    </Link>
                    <p className="performer"> Firstname: {usersData.firstName}</p>
                    <p className="album">Lastname: {usersData.lastName}</p>
                    <p className="music-time"> E-mail: {usersData.email}</p>
                </div>
            </div>
        </li>


    );
};

export default AllUserDetails;