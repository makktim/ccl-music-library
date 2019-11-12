import React, {Component} from 'react';
import './MusicLibrary.css';
import {Link} from "react-router-dom";
import LibrarySong from "./LibrarySong";
import voice from "../images/voice1.jpg";

class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/songs/list')
            .then(results => results.json())
            .then(songs => this.setState({songs: songs}));
    }

    render() {
        return (
            <div className="body" >
                <h1>All Music List</h1>
                <img className="voice" src={voice} alt=""/>
                <Link className="add-btn" to="/songs/add">+</Link>
                {this.state.songs.map(function (item, index) {
                    return (
                        <LibrarySong key={index} item={item} index={index}/>
                    )
                })}
            </div>
        );
    }

}

export default MusicList;