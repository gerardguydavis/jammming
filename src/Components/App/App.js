import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Searchbar } from './Searchbar';
import { SearchResults } from './SearchResults';
import { Playlist } from './Playlist';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <Searchbar />
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;