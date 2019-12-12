import React, { useContext, useEffect} from 'react';
import { SongContext } from '../context/SongContext';
import CommentDetails from "./CommentDetails";
import useInput from "../hooks/InputHook";
import AllListSongDetails from "./AllListSongDetails";

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
        commentsBySongId.length ? (
            <div className="book-list">
                <h1>Add comment</h1>
                <form onSubmit={handleSubmit} action="/">
                    <input {...commentInput}  />
                    <input type="submit" value="Add new comment" />
                </form>
                <ul className="book-list">
                    {commentsBySongId.map((commentsBySongId) => {
                        return (
                            <CommentDetails commentsBySongId={commentsBySongId} key={commentsBySongId.id} /> );
                    })}
                </ul>
            </div>
        ) : (
            <div>
                <h1>Add comment</h1>
                <form onSubmit={handleSubmit} action="/">
                    <input {...commentInput}  />
                    <input type="submit" value="Add new comment" />
                </form>
                <div className = "empty">No Comments on your song.</div>
            </div>

        )
    )
};

export default Comment;