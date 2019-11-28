import React from 'react';

const UserDetails = ({usersData}) => {

    return (
            <div className="user">
                <div className="username">
                    <h2>{usersData.username}</h2>
                    <p className="firstname"> {usersData.firstName}</p>
                    <p className="lastname"> {usersData.lastName}</p>
                    <p className="email"> {usersData.email}</p>
                </div>
            </div>

    );
};

export default UserDetails;