import React from 'react';
import BookShelf from './BookShelf';

function BookShelfs() {
        return (
                <div className="list-books-content">
                        <div>
                                <BookShelf bookShelf="Currently Reading" />
                                <BookShelf bookShelf="Want to read" />
                                <BookShelf bookShelf="Read" />
                        </div>
                </div>
        );
}

export default BookShelfs;
