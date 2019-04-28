import React from 'react';
import { PropTypes } from 'prop-types';

class ShelfChanger extends React.Component {
        state = {
                value: '',
        };

        componentDidMount() {
                const { shelf } = this.props;
                this.setState({ value: shelf });
        }

        handleChange = event => {
                const { value } = event.target;
                const { book, changeShelf } = this.props;
                this.setState({ value });
                changeShelf(book, value);
        };

        render() {
                const { value } = this.state;
                return (
                        <div className="book-shelf-changer">
                                <select value={value} onChange={this.handleChange}>
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
        shelf: PropTypes.string,
};

export default ShelfChanger;
