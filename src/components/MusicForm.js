import React, { useContext, useState} from 'react';
import axios from 'axios';
import { SongContext } from '../context/SongContext';

const NewMusicForm = () => {

    const {addSong} = useContext(SongContext);

    const [title, setTitle] = useState('');
    const [album, setAlbum] = useState('');
    const [performer, setPerformer] = useState('');
    const [length, setLength] = useState('');



    const addNewSong = (song) =>{
        console.log(song);
        axios.post('http://localhost:8080/songs/add', song
        ).then(song => {
            console.log(song);
        }).catch(err => console.log(err));
    };

    const newSong = (title,album,performer,length) => {
        const song = {
            title: title,
            album: album,
            performer: performer,
            length: length
        };
        console.log(song);
        addNewSong(song)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        newSong(title,album,performer,length);
        addSong(title,album,performer,length);
        setTitle('');
        setAlbum('');
        setPerformer('');
        setLength('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title}
            onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="album" value={album}
            onChange={(e) => setAlbum(e.target.value)} required />
            <input type="text" placeholder="performer" value={performer}
            onChange={(e) => setPerformer(e.target.value)} required />
            <input type="text" placeholder="length" value={length}
           onChange={(e) => setLength(e.target.value)} required />
            <input type="submit" value="add new music" />
        </form>
    )
}

export default NewMusicForm;