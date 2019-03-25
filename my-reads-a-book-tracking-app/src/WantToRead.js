import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

const WantToReadComponent = ({ books, changeShelf }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
            {books.map(book => book.shelf === 'wantToRead').length === 0 && <h3>(empty bookshelf)</h3>}
            <ol className="books-grid">
                {books.map(
                    book =>
                        book.shelf === 'wantToRead' && (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    changeShelf={changeShelf}
                                    title={book.title}
                                    author={book.authors[0]}
                                    image={book.imageLinks.thumbnail}
                                />
                            </li>
                        )
                )}
            </ol>
        </div>
    </div>
);

WantToReadComponent.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeShelf: PropTypes.func.isRequired,
};

export default WantToReadComponent;
