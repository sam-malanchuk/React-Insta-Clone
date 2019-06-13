import React from 'react';
import './PostContainer.css';

function PostContainer(props) {
    return (
        <div>
            <div className="postTop">
                <img src={props.postData.thumbnailUrl} className="profileImg" alt={props.postData.username + "'s profile image"} />
                <p>{props.postData.username}</p>
            </div>
            <div className="postImg">
                <img src={props.postData.imageUrl} alt="none" />
            </div>
            <div className="postComments">
                <p>{props.postData.likes}</p>
                <p>{props.postData.timestamp}</p>
            </div>
        </div>
    );
}

export default PostContainer;