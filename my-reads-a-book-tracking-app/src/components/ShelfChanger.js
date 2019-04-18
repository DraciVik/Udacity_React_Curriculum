import React from 'react';
import { PropTypes } from 'prop-types';

class ShelfChanger extends React.Component {
        render() {
                const { book } = this.props;
                const { changeShelf } = this.props;
                return (
                        <div className="book-shelf-changer">
                                <select value={book.shelf} onChange={event => changeShelf(book, event.target.value)}>
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

ShelfChanger.propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired,
};

export default ShelfChanger;