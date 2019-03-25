import React from 'react';
import { PropTypes } from 'prop-types';

class BookShelfChanger extends React.Component {
    getShelfFromBook(book) {
        const { books } = this.props;
        const bookFound = books.find(b => b.id === book.id);

        if (bookFound) {
            return bookFound.shelf;
        }
        return 'none';
    }

    render() {
        const { changeShelf } = this.props;
        const { book } = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange={event => changeShelf(book, event.target.value)} value={this.getShelfFromBook(book)}>
                    <option value="move" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}
BookShelfChanger.propTypes = {
    changeShelf: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
    books: PropTypes.array,
};

export default BookShelfChanger;
