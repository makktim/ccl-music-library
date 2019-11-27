import React, { useContext} from 'react';
import { SongContext } from '../../context/SongContext';
import UserDetails from './UserDetails';

const User = () => {
    const {usersData} = useContext(SongContext);
    console.log(usersData);

    return(
        usersData.length ? (
            <div className="book-list">
                <ul>
                    {usersData.map((usersData) => {
                        return (
                            <UserDetails usersData={usersData} key={usersData.id} />);
                    })}
                </ul>
            </div>
        ) : (
            <div className = "empty">No Data</div>
        )
    )
}

export default User;