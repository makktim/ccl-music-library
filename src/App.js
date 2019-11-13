import React from 'react';
import SongContextProvider from './context/SongContext';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import HomeNavBar from './components/HomeNavBar';
import MusicList from './components/MusicList';
import AllMusicList from './components/AllMusicList';
import NewMusicForm from './components/MusicForm';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <SongContextProvider>
        <Route exact path='/' component={HomeNavBar} />
        <Route exact path='/' component={AllMusicList} />
          <Route path='/list' component={NavBar} />
          <Route path='/list' component={NewMusicForm} />
        <Route path='/list' component={MusicList} />
      </SongContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
