import React from 'react';
import { PropTypes } from 'prop-types';

class SearchBook extends React.Component {
        render() {
                const { onNavigate } = this.props;
                return (
                        <div className="search-books">
                                <div className="search-books-bar">
                                        <button type="submit" className="close-search" onClick={onNavigate}>
                                                Close
                                        </button>
                                        <div className="search-books-input-wrapper">
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

SearchBook.propTypes = {
        onNavigate: PropTypes.func,
};

export default SearchBook;
