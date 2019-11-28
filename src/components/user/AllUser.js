import React, { useContext, useEffect} from 'react';
import { SongContext } from '../../context/SongContext';
import AllUserDetails from './AllUserDetails';

const AllUser = () => {

    const {usersData,showAllUser} = useContext(SongContext);

    useEffect(() => {
        showAllUser()
    },[]);

    console.log(usersData);
    return(
        usersData.length ? (
            <div className="book-list">
                <ul>
                    {usersData.map((usersData) => {
                        return (
                            <AllUserDetails usersData={usersData} key={usersData.id} />);
                    })}
                </ul>
            </div>
        ) : (
            <div className = "empty">No Data</div>
        )
    )
};

export default AllUser;