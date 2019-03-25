import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

const CurrentlyReadingComponent = ({ books, changeShelf }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.filter(book => book.shelf === 'currentlyReading').length === 0 && <h3>(empty bookshelf)</h3>}
                {books
                    .filter(book => book.shelf === 'currentlyReading')
                    .map(book => (
                        <li key={book.id}>
                            <Book
                                books={books}
                                book={book}
                                changeShelf={changeShelf}
                                title={book.title}
                                author={book.authors[0]}
                                image={book.imageLinks.thumbnail}
                            />
                        </li>
                    ))}
            </ol>
        </div>
    </div>
);

CurrentlyReadingComponent.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeShelf: PropTypes.func.isRequired,
};

export default CurrentlyReadingComponent;
