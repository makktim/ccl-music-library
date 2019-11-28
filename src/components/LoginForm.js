import React, { useContext} from 'react';
import axios from 'axios';
import { SongContext } from '../context/SongContext';
import useInput from '../hooks/InputHook'

const LoginForm = () => {

    const usernameInput = useInput('', 'username');
    const passwordInput = useInput('', 'password');

    const loginUser = (userCredentials) =>{
        console.log(userCredentials);
        axios.post('http://localhost:8080/auth/signin', userCredentials
        ).then(token => {
            console.log(token);
        }).catch(err => console.log(err));
    };

    const newUserCredentials = (username, password) => {
        const userCredentials = {
            username: username,
            password: password
        };
        console.log(userCredentials);
        loginUser(userCredentials)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        newUserCredentials(usernameInput.value,passwordInput.value);
    };

    return (
        <div className="LoginBody">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input {...usernameInput}  />
                <input  {...passwordInput}/>

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginForm;