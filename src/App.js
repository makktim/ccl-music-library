import React from 'react';
import SongContextProvider from './context/SongContext';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import HomeNavBar from './components/HomeNavBar';
import MusicList from './components/MusicList';
import AllMusicList from './components/AllMusicList';
import NewMusicForm from './components/MusicForm';
import SearchMusicList from "./components/SearchMusicList";
import AllUser from "./components/user/AllUser";
import User from "./components/user/User";
import UserNavbar from "./components/UserNavbar";
import LoginForm from "./components/LoginForm";
import NewRegistrationForm from "./components/RegistrationForm";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <UserNavbar/>
                <div className="AppBody">
                    <SongContextProvider>
                        <Route exact path='/' component={HomeNavBar}/>
                        <Route exact path='/' component={AllMusicList}/>
                        <Route path='/registration' component={NewRegistrationForm}/>
                        <Route path='/search/:search' component={SearchMusicList}/>
                        <Route path='/list' component={NavBar}/>
                        <Route path='/list' component={NewMusicForm}/>
                        <Route path='/list' component={MusicList}/>
                        <Route path='/user/list' component={AllUser}/>
                        <Route path='/userpage' component={User}/>
                        <Route path='/login' component={LoginForm}/>
                    </SongContextProvider>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
