import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
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
            <CommentSection timestamp={props.postData.timestamp} likes={props.postData.likes} comments={props.postData.comments} />
        </div>
    );
}

PostContainer.propTypes = {
    postData: PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
        thumbnailUrl:  PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default PostContainer;