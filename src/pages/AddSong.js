import React, {Component} from 'react';
import axios from 'axios';
import './AddSong.css';
import {Link} from 'react-router-dom';

class AddSong extends Component {

    state = {
        song: []
    };

    addNewSong(song){
        console.log(song);
        axios.post('http://localhost:8080/songs/add', song
        ).then(song => {
            console.log(song);
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        e.preventDefault();
        const song = {
            title: this.refs.title.value,
            album: this.refs.album.value,
            performer: this.refs.performer.value,
            length: this.refs.length.value
        };
        this.setState({song: song});
        this.addNewSong(song);

    }

    render() {
        return (
            <div className="form-style-8">
                <br/>
                <Link className="btn grey" to="/">Back</Link>
                <h1>Add Song</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <label htmlFor="title">Song Title</label>
                        <input type="text" name="title" ref="title" placeholder="title"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="album">Album Name</label>
                        <input type="text" name="album" ref="album" placeholder="album"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="performer">Performer Name</label>
                        <input type="text" name="performer" ref="performer" placeholder="performer"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="length">Song length</label>
                        <input type="double" name="length" ref="length" placeholder="length"/>
                    </div>
                    <input type="submit" value="Save" className="btn"/>
                </form>
            </div>


        )
    }
}

export default AddSong;

