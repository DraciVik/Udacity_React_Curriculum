import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function AddBookButton() {
        return (
                <div className="open-search">
                        <Link to="searchBooks">
                                <button type="submit">Add a book</button>
                        </Link>
                </div>
        );
}

export default AddBookButton;
