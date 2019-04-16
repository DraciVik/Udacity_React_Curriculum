/* eslint-disable no-console */
import React from 'react';
import { PropTypes } from 'prop-types';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class SearchBook extends React.Component {
        state = {
                query: '',
                books: [],
        };

        updateQuery = query => {
                this.setState({ query });
        };

        loadBook = query => {
                this.updateQuery(query);
                BooksAPI.search(query).then(books => {
                        this.setState({ books });
                });
        };

        render() {
                const { query, books } = this.state;
                const { onNavigate, changeShelf } = this.props;
                let showBooks = [];

                if (query) {
                        showBooks = books;
                }

                return (
                        <div className="search-books">
                                <div className="search-books-bar">
                                        <button type="submit" className="close-search" onClick={onNavigate}>
                                                Close
                                        </button>
                                        <div className="search-books-input-wrapper">
                                                <input
                                                        value={query}
                                                        onChange={event => this.loadBook(event.target.value)}
                                                        type="text"
                                                        placeholder="Search by title or author"
                                                />
                                        </div>
                                </div>
                                <div className="search-books-results">
                                        <ol className="books-grid">
                                                {showBooks.map(book => (
                                                        <li key={book.id}>
                                                                <Book
                                                                        changeShelf={changeShelf}
                                                                        books={books}
                                                                        book={book}
                                                                />
                                                        </li>
                                                ))}
                                        </ol>
                                </div>
                        </div>
                );
        }
}

SearchBook.propTypes = {
        onNavigate: PropTypes.func,
        changeShelf: PropTypes.func,
};

export default SearchBook;
