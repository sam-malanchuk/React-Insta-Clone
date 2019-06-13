import React from 'react';
import './CommentSection.css';

function CommentSection(props) {
    return (
        <div className="postCommentsContainer">
            <div className="postIcons">
                <a href="/"><div className="postIcon heartIcon"></div></a>
                <a href="/"><div className="postIcon commentIcon"></div></a>
            </div>
            <p className="postLikes">{props.likes} likes</p>
            {props.comments.map(comment => {
                return <div className="comment"><span className="commentUser">{comment.username}</span> {comment.text}</div>;
            })}
            <p className="postTimestamp">{props.timestamp}</p>
            <div className="addComment">
                <input type="text" className="commentInput" placeholder="Add a comment..." />
                <a href="/"><div className="postIcon commentIcon"></div></a>
            </div>
        </div>
    );
}

export default CommentSection;