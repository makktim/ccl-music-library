import React, {useContext} from 'react';
import {SongContext} from '../../context/SongContext';
import UserDetails from './UserDetails';

const User = () => {

    const {userData, showUserData} = useContext(SongContext);

    // useEffect(() => {
    //   showUserData();
    //
    // }, []);

    return (
            <div className="book-list">
                <ul>
                    {userData.map((userData) => {
                        return (
                            <UserDetails userData={userData} key={userData.id}/>);
                    })}
                </ul>
            </div>
    )

}

export default User;