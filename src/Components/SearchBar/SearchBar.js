import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    search() {
        this.props.onSearch(this.state.searchTerm);
    }

    handleTermChange(e) {
        this.setState({ searchTerm: e.target.value });
    }

    handleKeyPress(event) {
        if (event.nativeEvent.keyCode === 13 && this.state.searchTerm === '') {
            return;
        }

        if (event.nativeEvent.keyCode === 13) {
            this.props.onSearch(this.state.searchTerm);
        }
    }

    render() {
        return (
            <div className="SearchBar">
                <input
                    placeholder="Enter A Song, Album, or Artist"
                    onChange={this.handleTermChange}
                />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}