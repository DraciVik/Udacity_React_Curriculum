import React from 'react';
import { PropTypes } from 'prop-types';
import BookShelf from './BookShelf';

function BookShelfs({ books, changeShelf }) {
        const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
        const wantToRead = books.filter(book => book.shelf === 'wantToRead');
        const read = books.filter(book => book.shelf === 'read');

        return (
                <div className="list-books-content">
                        <div>
                                <BookShelf
                                        changeShelf={changeShelf}
                                        books={currentlyReading}
                                        bookShelf="Currently Reading"
                                />
                                <BookShelf changeShelf={changeShelf} books={wantToRead} bookShelf="Want to read" />
                                <BookShelf changeShelf={changeShelf} books={read} bookShelf="Read" />
                        </div>
                </div>
        );
}

BookShelfs.propTypes = {
        books: PropTypes.array,
        changeShelf: PropTypes.func,
};

export default BookShelfs;
