import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

const ReadComponent = ({ read }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
            {read.length === 0 && <h3>(empty bookshelf)</h3>}
            <ol className="books-grid">
                {read.map(book => (
                    <li key={book.id}>
                        <Book title={book.title} image={book.imageLinks.thumbnail} author={book.author} />
                    </li>
                ))}
            </ol>
        </div>
    </div>
);

ReadComponent.propTypes = {
    read: PropTypes.array,
};

export default ReadComponent;
