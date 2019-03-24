import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

const ReadComponent = ({ read, changeShelf }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
            {read.length === 0 && <h3>(empty bookshelf)</h3>}
            <ol className="books-grid">
                {read.map(book => (
                    <li key={book.id}>
                        <Book
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

ReadComponent.propTypes = {
    read: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeShelf: PropTypes.func.isRequired,
};

export default ReadComponent;
