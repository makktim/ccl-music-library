import React from 'react';
import MusicLibrary from "./pages/MusicLibrary";
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from "./header/Navbar";
import AddSong from "./pages/AddSong";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
        <Route exact path='/' component={MusicLibrary} />
        <Route path='/songs/add' component={AddSong} />
        {/*<Route exact path='/songs/edit/:id' component={} />*/}
        {/*<Route exact path='/songs/:id' component={} />*/}
        </BrowserRouter>
    </div>

  );
}

export default App;
