import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

const CurrentlyReadingComponent = ({ currentlyReading }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
            {currentlyReading.length === 0 && <h3>(empty bookshelf)</h3>}
            <ol className="books-grid">
                {currentlyReading.map(book => (
                    <li key={book.id}>
                        <Book title={book.title} author={book.authors[0]} image={book.imageLinks.thumbnail} />
                    </li>
                ))}
            </ol>
        </div>
    </div>
);

CurrentlyReadingComponent.propTypes = {
    currentlyReading: PropTypes.arrayOf(PropTypes.object),
};

export default CurrentlyReadingComponent;
