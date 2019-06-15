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
    console.log("I will update index " + index + " with " + event);
  }

  componentDidMount() {
    // setTimeout(() => {
      this.setState({ data: DummyData });
    // }, 2000);
  }


  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.length > 0 ? ( 
          this.state.data.map((post, index) => {
            return <PostContainer postData={post} key={post.id} index={index} addNewComment={this.addNewComment} />;
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
  }
}

export default App;
