import React, {useContext} from 'react';
import {SongContext} from "../context/SongContext";
import trash from "../images/delete.png";

const CommentDetails = ({comments}) => {

    const {deleteComment, songId} = useContext(SongContext);

    return(
        <li>
            <p>{comments.comment}</p>
            <button className="deleteComment" onClick ={() => deleteComment(comments.id, songId)}>Add</button>
        </li>
    )
};

export default CommentDetails;