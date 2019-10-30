import React, {Component} from 'react';
import {MusicList} from "./MusicLibraryStyle";
import axios from "axios";


class LibrarySong extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            index: 0
        }
    }

    onDelete = () =>{
        let song = this.state.item.title;
        axios.delete(`http://localhost:8080/songs/${song}`, song)
            .then(song => {
                console.log(song);
                this.props.history.push('/');
            }).catch(err => console.log(err));
    };

    render() {
        return(
            <div key={ this.state.index}>
                <MusicList>
                    <li>
                        <h2 className="title"> { this.state.item.title}</h2>
                        <h3 className="album">album: { this.state.item.album}</h3>
                        <p className="performer">performer:{ this.state.item.performer}</p>
                        <p className="length">length:{ this.state.item.length}</p>
                    </li>
                    <button onClick={this.onDelete.bind(this)}>Delete</button>
                </MusicList>
            </div>
        )
    }
}


export default LibrarySong;