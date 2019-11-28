import React, { useContext} from 'react';
import { SongContext } from '../context/SongContext';
import useInput from '../hooks/InputHook'

const LoginForm = () => {

    const usernameInput = useInput('', 'username');
    const passwordInput = useInput('', 'password');

    const {newUserCredentials} = useContext(SongContext);



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