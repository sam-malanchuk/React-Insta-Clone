import React from 'react';
import './Comment.css';

function Comment(props) {
    return (
        <div className="comment">
            <span className="commentUser">
            <a href={"https://www.instagram.com/" + props.comment.username + "/"}>{props.comment.username}</a>
            </span>
            {" " + props.comment.text}
        </div>
    );
}

export default Comment;