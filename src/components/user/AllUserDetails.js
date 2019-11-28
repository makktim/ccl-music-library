import React from 'react';

const AllUserDetails = ({usersData}) => {



    return (
        <li>
            <div className="music-info">
                <div className="title">
                    <h2>{usersData.username}</h2>
                    <p className="performer"> {usersData.firstName}</p>
                    <p className="album"> {usersData.lastName}</p>
                    <p className="music-time"> {usersData.email}</p>
                </div>
            </div>
        </li>


    );
};

export default AllUserDetails;