import React from 'react';
import { PropTypes } from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

const Book = ({ image, title, author }) => (
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
            <BookShelfChanger />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
    </div>
);
Book.propTypes = {
    image: PropTypes.string,
};

export default Book;
