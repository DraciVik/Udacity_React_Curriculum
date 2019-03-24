import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

const WantToReadComponent = ({ wantToRead, changeShelf }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
            {wantToRead.length === 0 && <h3>(empty bookshelf)</h3>}
            <ol className="books-grid">
                {wantToRead.map(book => (
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

WantToReadComponent.propTypes = {
    wantToRead: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeShelf: PropTypes.func.isRequired,
};

export default WantToReadComponent;
