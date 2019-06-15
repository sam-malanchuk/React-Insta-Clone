import React, {Component} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import DummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      data: []
    }
  }
  addNewComment = (event, index) => {
    const newData = this.state.data;
    newData[index].comments.push({
      id: Date.now(),
      username: "ethan_cooper",
      text: event
    });
    this.setState({data: newData});
  }

  componentDidMount() {
      this.setState({ data: DummyData });
  }

  likePost = index => {
    const newData = this.state.data;
    const postHeart = document.getElementById("heartIcon" + index);
    postHeart.classList.toggle("liked");
    if(postHeart.classList.contains("liked")) {
        newData[index].likes++; 
    } else {
        newData[index].likes--; 
    }
    this.setState({data: newData});
}

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.length > 0 ? ( 
          this.state.data.map((post, index) => {
            return <PostContainer postData={post} key={post.id} index={index} addNewComment={this.addNewComment} likePost={this.likePost} />;
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
  }
}

export default App;
