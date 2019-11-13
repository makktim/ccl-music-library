import React from 'react';
import SongContextProvider from './context/SongContext';
import NavBar from './components/Navbar';
import MusicList from './components/MusicList';
import NewMusicForm from './components/MusicForm';

function App() {
  return (
    <div className="App">
      <SongContextProvider>
        <NavBar/>
          <NewMusicForm/>
        <MusicList/>
      </SongContextProvider>
    </div>
  );
}

export default App;
