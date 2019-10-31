import React, {Component} from 'react';
import './MusicLibrary.css';
import axios from "axios";
import music from "../images/music2.jpg"
import trash from "../images/trash.png";


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
            .then(songs => {
                console.log(songs);
                window.location.reload();
                this.props.history.push('/');
            }).catch(err => console.log(err));
    };

    render() {
        return(
            <div className="music-box" key={ this.state.index}>
                <div className="music-info">
                    <div className="music-img">
                        <img src={music} alt=""/>
                    </div>
                    <div className="music-name">
                        <h3>{ this.state.item.title}</h3>
                        <p> { this.state.item.performer} { this.state.item.album}</p>
                        <p className="music-time"> time: { this.state.item.length}</p>
                    </div>
                    <img className="trash" onClick={this.onDelete} src={trash} alt=""/>
                </div>
            </div>
        )
    }
}


export default LibrarySong;