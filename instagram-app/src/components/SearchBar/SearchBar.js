import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: ""
        };
    }
    sendSearchText = event => {
        event.preventDefault();
        this.props.filterPosts(this.state.searchText);
    }
    changeHandler = event => {
        this.setState({searchText: event.target.value});
    }
    render() {
        return (
        <header className="app-header">
            <div className="logoImages navBlock">
                <a href="/"><div className="logoImage"></div></a>
                <a href="/"><div className="logoText"></div></a>
            </div>
            <div className="navBlock">
                <form onSubmit={this.sendSearchText}>
                    <input type="text" name="search" className="navSearch" value={this.state.searchText} onChange={this.changeHandler} placeholder="Search" />
                </form>
            </div>
            <div className="navIcons navBlock">
                <a href="/"><div className="exporeIcon"></div></a>
                <a href="/"><div className="heartIcon"></div></a>
                <a href="/"><div className="profileIcon"></div></a>
            </div>
        </header>
        );
    }
}

export default SearchBar;