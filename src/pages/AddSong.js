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
                <h1>Add Song</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <label htmlFor="title"/>
                        <input type="text" ref="title" placeholder="title"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="album"/>
                        <input type="text" name="album" ref="album" placeholder="album"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="performer"/>
                        <input type="text" name="performer" ref="performer" placeholder="performer"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="length"/>
                        <input type="double" name="length" ref="length" placeholder="length"/>
                    </div>
                    <input type="submit" value="Save" className="btn"/>
                    <Link className="btn" to="/"> Back </Link>
                </form>
            </div>


        )
    }
}

export default AddSong;

