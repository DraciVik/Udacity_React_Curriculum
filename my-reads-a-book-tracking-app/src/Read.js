import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

const ReadComponent = ({ books, changeShelf }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.filter(book => book.shelf === 'read').length === 0 && <h3>(empty bookshelf)</h3>}
                {books
                    .filter(book => book.shelf === 'read')
                    .map(book => (
                        <li key={book.id}>
                            <Book
                                books={books}
                                book={book}
                                changeShelf={changeShelf}
                                title={book.title}
                                authors={book.authors}
                                image={book.imageLinks.thumbnail}
                            />
                        </li>
                    ))}
            </ol>
        </div>
    </div>
);

ReadComponent.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeShelf: PropTypes.func.isRequired,
};

export default ReadComponent;
