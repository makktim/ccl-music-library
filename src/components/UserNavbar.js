import React from 'react';
import {Link} from "react-router-dom";

const UserNavbar = () => {

    return (
        <div className='usernavbar'>
            <Link to="/" className="homeBtn">Home</Link>
            <Link to="/registration" className="registrationBtn">Registration</Link>
            <Link to="/login" className="loginBtn">Login</Link>
        </div>
    );
}

export default UserNavbar