import React from 'react';
import { Link } from 'react-router-dom';

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
