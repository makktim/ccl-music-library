import React, {useContext} from 'react';
import {SongContext} from '../../context/SongContext';
import UserDetails from './UserDetails';

const User = () => {

    const {userData, showUserData} = useContext(SongContext);

    // useEffect(() => {
    //   showUserData();
    //
    // }, [setUserData]);

    return (
        <div>
            <h1 className="title">This is your profile page</h1>
            <div className="book-list">
                <ul>
                    {userData.map((userData) => {
                        return (
                            <UserDetails userData={userData} key={userData.id}/>);
                    })}
                </ul>
            </div>
        </div>
    )

}

export default User;