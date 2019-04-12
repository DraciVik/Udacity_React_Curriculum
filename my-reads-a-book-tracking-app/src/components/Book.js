import React from 'react';
import { PropTypes } from 'prop-types';
import ShelfChanger from './ShelfChanger';

function Book({ books, book }) {
        return (
                <div className="book">
                        <div className="book-top">
                                <div
                                        className="book-cover"
                                        style={{
                                                width: 128,
                                                height: 193,
                                                backgroundImage: `url(${book.imageLinks.thumbnail})`,
                                        }}
                                />
                                <ShelfChanger />
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">
                                {book.authors.map((author, index) => (
                                        <p style={{ margin: 0 }} key={index}>
                                                {author}{' '}
                                        </p>
                                ))}
                        </div>
                </div>
        );
}

Book.propTypes = {
        books: PropTypes.array.isRequired,
        book: PropTypes.object.isRequired,
};

export default Book;
