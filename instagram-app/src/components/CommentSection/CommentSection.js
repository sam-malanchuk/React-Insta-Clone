import React from 'react';
import Comment from '../Comment/Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor() {
      super();
      this.state = {
          comments: [
              [""]
          ],
          comment: ""
      };
    }
    sendNewComment = event => {
        event.preventDefault();
        this.props.addNewComment(this.state.comment, this.props.indexIs);
        this.setState({comment: ""});
    };
    changeHandler = event => {
        this.setState({comment: event.target.value});
    }
    render() {
        return (
            <div className="postCommentsContainer">
                <div className="postIcons">
                    <a href="/"><div className="postIcon heartIcon"></div></a>
                    <a href="/"><div className="postIcon commentIcon"></div></a>
                </div>
                <p className="postLikes">{this.props.likes} likes</p>
                {this.props.comments.map(comment => {
                    return <Comment comment={comment} key={comment.id} />;
                })}
                <p className="postTimestamp">{this.props.timestamp}</p>
                <div className="addComment">
                    <form onSubmit={this.sendNewComment}>
                        <input type="text" className="commentInput" onChange={this.changeHandler} value={this.state.comment} placeholder="Add a comment..." />
                        <button type="submit" className="postIcon commentIcon"></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CommentSection;