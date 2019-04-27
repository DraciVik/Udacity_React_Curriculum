import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const SearchResults = ({ searchedBooks, myBooks, changeShelf }) => {
        const updatedBooks = searchedBooks.map(book => {
                myBooks.map(b => {
                        if (b.id === book.id) {
                                book.shelf = b.shelf;
                        }
                        return b;
                });
                return book;
        });
        return (
                <div className="search-books-results">
                        <ol className="books-grid">
                                {updatedBooks.map(book => (
                                        <li key={book.id}>
                                                <Book
                                                        changeShelf={changeShelf}
                                                        book={book}
                                                        shelf={book.shelf ? book.shelf : 'none'}
                                                />
                                        </li>
                                ))}
                        </ol>
                </div>
        );
};

SearchResults.propTypes = {
        searchedBooks: PropTypes.func,
        myBooks: PropTypes.func,
        changeShelf: PropTypes.func,
};

export default SearchResults;
