import React from 'react';
import MusicLibrary from "./pages/MusicLibrary";
import MusicList from "./pages/MusicList";
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from "./header/Navbar";
import AddSong from "./pages/AddSong";
import MusicContextProvider from "./context/MusicContext";

function App() {
  return (
    <div className="App">
        {/*<MusicContextProvider>*/}
        {/*    <NavBar/>*/}
        {/*</MusicContextProvider>*/}


        <BrowserRouter>
        <NavBar/>
        <Route exact path='/' component={MusicList} />
        <Route path='/list' component={MusicLibrary} />
        <Route path='/songs/add' component={AddSong} />
        {/*<Route exact path='/songs/edit/:id' component={} />*/}
        {/*<Route exact path='/songs/:id' component={} />*/}
        </BrowserRouter>
    </div>

  );
}

export default App;
