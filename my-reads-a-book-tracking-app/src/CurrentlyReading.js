import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

const CurrentlyReadingComponent = ({ currentlyReading }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                <li>
                    <Book />
                </li>
            </ol>
        </div>
    </div>
);

CurrentlyReadingComponent.propTypes = {
    currentlyReading: PropTypes.array,
};

export default CurrentlyReadingComponent;
