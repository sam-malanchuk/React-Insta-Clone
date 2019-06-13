import React from 'react';
import './PostContainer.css';

function PostContainer(props) {
    return (
        <div className="postContainer">
            <div className="postTopContainer">
                <a href={"https://www.instagram.com/" + props.postData.username + "/"}><img src={props.postData.thumbnailUrl} className="profileImg" alt={props.postData.username + "'s profile image"} /></a>
                <a href={"https://www.instagram.com/" + props.postData.username + "/"} className="usernameText"><p>{props.postData.username}</p></a>
            </div>
            <div className="postImgContainer">
                <img src={props.postData.imageUrl} className="postImg" alt={"image-" + props.postData.id} />
            </div>
            <div className="postCommentsContainer">
                <div className="postIcons">
                    <a href="/"><div className="postIcon heartIcon"></div></a>
                    <a href="/"><div className="postIcon commentIcon"></div></a>
                </div>
                <p>{props.postData.likes} likes</p>
                <p>{props.postData.timestamp}</p>
            </div>
        </div>
    );
}

export default PostContainer;