import React, { useContext} from 'react';
import axios from 'axios';
import { SongContext } from '../context/SongContext';
import useInput from '../hooks/InputHook'

const NewMusicForm = () => {

    const {addSong} = useContext(SongContext);

    // const [title, setTitle] = useState('');
    // const [album, setAlbum] = useState('');
    // const [performer, setPerformer] = useState('');
    // const [length, setLength] = useState('');

    const titleInput = useInput('', 'title');
    const albumInput = useInput('', 'album');
    const performerInput = useInput('', 'performer');
    const lengthInput = useInput('', 'length');


    const addNewSong = (song) =>{
        console.log(song);
        axios.post('http://localhost:8762/musicservice/songs/add', song
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
        newSong(titleInput.value,albumInput.value,performerInput.value,lengthInput.value);
        addSong(titleInput.value,albumInput.value,performerInput.value,lengthInput.value);
        // titleInput('');
        // setAlbum('');
        // setPerformer('');
        // setLength('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input {...titleInput}  />
            <input  {...albumInput}/>
            <input {...performerInput}/>
            <input {...lengthInput}  />
            <input type="submit" value="add new music" />
        </form>
    )
};

export default NewMusicForm;