import React from 'react';
import { PropTypes } from 'prop-types';
import * as BooksAPI from './BooksAPI';

class Search extends React.Component {
    state = {
        query: '',
        results: [],
    };

    updateQuery = query => {
        this.setState({ query: query.trim() });
        this.performSearch(query);
    };

    performSearch(query) {
        if (query === '' || query === undefined) {
            this.setState({ results: [] });
        }

        // TODO: import all books
        BooksAPI.search(query).then(books => {
            if (typeof books === Array) {
                this.setState({ results: books });
            } else {
                this.setState({ results: [] });
            }
        });
    }

    render() {
        const { goToMainPage } = this.props;
        const { query } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button type="button" className="close-search" onClick={() => goToMainPage()}>
                        Close
                    </button>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={event => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid" />
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    goToMainPage: PropTypes.func,
};

export default Search;
