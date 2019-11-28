import React from 'react';
import SongContextProvider from './context/SongContext';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import HomeNavBar from './components/HomeNavBar';
import MusicList from './components/MusicList';
import AllMusicList from './components/AllMusicList';
import NewMusicForm from './components/MusicForm';
import SearchMusicList from "./components/SearchMusicList";
import User from "./components/user/User";
import NewRegistrationForm from "./components/RegistrationForm";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <SongContextProvider>
        <Route exact path='/' component={HomeNavBar} />
        <Route exact path='/' component={AllMusicList} />
          <Route path='/search/:search' component={SearchMusicList} />
          <Route path='/list' component={NavBar} />
          <Route path='/list' component={NewMusicForm} />
        <Route path='/list' component={MusicList} />
        <Route path='/user/list' component={User}/>
          <Route path='/user/:username' component={User}/>
      </SongContextProvider>
        </BrowserRouter>
    </div>
  );
    return (
        <div className="App">
            <BrowserRouter>
                <SongContextProvider>
                    <Route exact path='/' component={HomeNavBar}/>
                    <Route exact path='/' component={AllMusicList}/>
                    <Route path='/registration' component={NewRegistrationForm}/>
                    <Route path='/search' component={SearchMusicList}/>
                    <Route path='/list' component={NavBar}/>
                    <Route path='/list' component={NewMusicForm}/>
                    <Route path='/list' component={MusicList}/>
                    <Route path='/user/list' component={User}/>
                    <Route path='/user/:username' component={User}/>
                </SongContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
