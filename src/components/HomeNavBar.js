import React from 'react';

const HomeNavBar = () => {
    return (
        <div className='navbar'>
            <h1>Best musics</h1>
            <a className='menu' href="/list">MyList</a>
            <p>Search your favourite music!</p>
        </div>
    );
}

export default HomeNavBar;