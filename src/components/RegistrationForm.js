import React, { useContext} from 'react';
import { SongContext } from '../context/SongContext';
import useInput from '../hooks/InputHook'

const NewRegistrationForm = () => {

    const {addUser} = useContext(SongContext);

    console.log("haloo");

    const userNameInput = useInput('', 'username');
    const passwordInput = useInput('', 'password');
    const firstNameInput = useInput('', 'firstName');
    const lastNameInput = useInput('', 'lastName');
    const emailInput = useInput('', 'email');
    const roleInput = "USER";

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        addUser(
            userNameInput.value,
            passwordInput.value,
            firstNameInput.value,
            lastNameInput.value,
            emailInput.value,
            roleInput
        );
    };

    return(
        <React.Fragment>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit} action="/">
            <input {...userNameInput}  />
            <input  {...passwordInput}/>
            <input {...firstNameInput}/>
            <input {...lastNameInput}  />
            <input {...emailInput}  />
            <input type="submit" value="add new user" />
        </form>
        </React.Fragment>
    )

};

export default NewRegistrationForm;