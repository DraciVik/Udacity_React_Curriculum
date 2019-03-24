import React from 'react';
import { PropTypes } from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

const Book = ({ book, image, title, author, changeShelf }) => (
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
            <BookShelfChanger book={book} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
    </div>
);
Book.propTypes = {
    book: PropTypes.object,
    image: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    changeShelf: PropTypes.func,
};

export default Book;
