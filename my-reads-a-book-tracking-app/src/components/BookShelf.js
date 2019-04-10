import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

function BookShelf({ bookShelf }) {
        return (
                <div className="bookshelf">
                        <h2 className="bookshelf-title">{bookShelf}</h2>
                        <div className="bookshelf-books">
                                <ol className="books-grid">
                                        <li>
                                                <Book />
                                        </li>
                                        <li>
                                                <Book />
                                        </li>
                                </ol>
                        </div>
                </div>
        );
}

BookShelf.propTypes = {
        bookShelf: PropTypes.string,
};

export default BookShelf;
