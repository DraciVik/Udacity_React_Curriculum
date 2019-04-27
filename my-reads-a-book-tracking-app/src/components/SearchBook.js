import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBooksInputField from './SearchBooksInputField';
import SearchResults from './SearchResults';

class SearchBook extends React.Component {
        render() {
                const { myBooks, searchBooks, searchedBooks, changeShelf, resetSearch } = this.props;

                return (
                        <div className="search-books">
                                <div className="search-books-bar">
                                        <Link to="/">
                                                <button type="submit" className="close-search" onClick={resetSearch}>
                                                        Close
                                                </button>
                                        </Link>
                                        <SearchBooksInputField searchBooks={searchBooks} />
                                </div>
                                <SearchResults
                                        searchedBooks={searchedBooks}
                                        myBooks={myBooks}
                                        changeShelf={changeShelf}
                                />
                        </div>
                );
        }
}

SearchBook.propTypes = {
        changeShelf: PropTypes.func,
        myBooks: PropTypes.array,
        searchedBooks: PropTypes.array,
        searchBooks: PropTypes.func,
        resetSearch: PropTypes.func,
};

export default SearchBook;
