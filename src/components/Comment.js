import React, { useContext, useEffect} from 'react';
import { SongContext } from '../context/SongContext';
import CommentDetails from "./CommentDetails";
import useInput from "../hooks/InputHook";

const Comment = () => {
    const {commentsBySongId, getCommentsBySongId, addComment} = useContext(SongContext);

    useEffect(() => {
        getCommentsBySongId();
    }, []);

    const commentInput = useInput('', 'comment');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        addComment(
            commentInput.value,
        );
    };

    return(

        <React.Fragment>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit} action="/">
                <input {...commentInput}  />
                <input type="submit" value="Add new comment" />
            </form>

        commentsBySongId.length ? (
            <div className="book-list">
                <ul className="book-list">
                    {commentsBySongId.map((commentsBySongId) => {
                        return (
                            <CommentDetails commentsBySongId={commentsBySongId} key={commentsBySongId.id} /> );
                    })}
                </ul>
            </div>
        ) : (
            <div className = "empty">No Comments on your song.</div>
        )
        </React.Fragment>
    )
};

export default Comment;