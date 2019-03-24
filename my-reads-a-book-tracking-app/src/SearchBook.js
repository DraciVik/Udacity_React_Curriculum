import React from 'react';
import { PropTypes } from 'prop-types';

class Search extends React.Component {
    render() {
        const { goToMainPage } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button type="button" className="close-search" onClick={() => goToMainPage()}>
                        Close
                    </button>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author" />
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
