import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

const WantToReadComponent = ({ wantToRead }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
            {wantToRead.length === 0 && <h3>(empty bookshelf)</h3>}
            <ol className="books-grid">
                {wantToRead.map(book => (
                    <li key={book.id}>
                        <Book title={book.title} image={book.imageLinks.thumbnail} author={book.authors[0]} />
                    </li>
                ))}
            </ol>
        </div>
    </div>
);

WantToReadComponent.propTypes = {
    wantToRead: PropTypes.array.isRequired,
};

export default WantToReadComponent;
