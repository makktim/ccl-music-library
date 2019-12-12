import React, {useContext} from 'react';
import {SongContext} from "../context/SongContext";

const CommentDetails = ({comments}) => {

    const {deleteComment, songId} = useContext(SongContext);

    return(
        <li>
            <p>{comments.comment}</p>
            <button className="deleteComment" onClick =>{() => deleteComment(comments.id, songId)}></button>
        </li>
    )
};

export default CommentDetails;