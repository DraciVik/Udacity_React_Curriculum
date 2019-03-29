import React from 'react';
import { PropTypes } from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

const Book = ({ books, book, image, title, authors, changeShelf }) => (
    <div className="book">
        <div className="book-top">
            <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 192,
                    backgroundImage: `url(${image})`,
                }}
            />
            <BookShelfChanger books={books} book={book} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{title}</div>
        {authors.map((author, index) => (
            <div key={index} className="book-authors">
                {author}
            </div>
        ))}
    </div>
);

Book.propTypes = {
    books: PropTypes.array,
    book: PropTypes.object,
    image: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.array,
    changeShelf: PropTypes.func,
};

export default Book;
