import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
    <header className="app-header">
        <div className="logoImages navBlock">
            <a href="/"><div className="logoImage"></div></a>
            <a href="/"><div className="logoText"></div></a>
        </div>
        <div className="navBlock">
            <input type="text" name="search" className="navSearch" placeholder="Search" />
        </div>
        <div className="navIcons navBlock">
            <a href="/"><div className="exporeIcon"></div></a>
            <a href="/"><div className="heartIcon"></div></a>
            <a href="/"><div className="profileIcon"></div></a>
        </div>
      </header>
    );
}

export default SearchBar;