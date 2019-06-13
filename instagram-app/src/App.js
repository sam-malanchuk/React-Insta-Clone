import React, {Component} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import DummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: DummyData
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(post => {
          return <PostContainer postData={post} key={post.id} />;
        })}
      </div>
    );
  }
}

export default App;
