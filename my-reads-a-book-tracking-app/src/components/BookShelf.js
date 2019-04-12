import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book.js';

function BookShelf({ bookShelf, books }) {
        return (
                <div className="bookshelf">
                        <h2 className="bookshelf-title">{bookShelf}</h2>
                        <div className="bookshelf-books">
                                <ol className="books-grid">
                                        {books.map(book => (
                                                <li key={book.id}>
                                                        <Book books={books} book={book} />
                                                </li>
                                        ))}
                                </ol>
                        </div>
                </div>
        );
}

BookShelf.propTypes = {
        bookShelf: PropTypes.string,
        books: PropTypes.array.isRequired,
};

export default BookShelf;
