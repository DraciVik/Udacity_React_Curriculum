import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function AddBookButton({ onNavigate }) {
        return (
                <div className="open-search">
                        <Link to="searchBooks">
                                <button type="submit" onClick={onNavigate}>
                                        Add a book
                                </button>
                        </Link>
                </div>
        );
}

AddBookButton.propTypes = {
        onNavigate: PropTypes.func,
};

export default AddBookButton;
