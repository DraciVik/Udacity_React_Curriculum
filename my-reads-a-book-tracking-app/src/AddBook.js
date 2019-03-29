import React from 'react';
import { Link } from 'react-router-dom';

const AddBookButton = () => (
    <div className="open-search">
        <Link to="/search">
            <button type="submit">Add a book</button>
        </Link>
    </div>
);

export default AddBookButton;
