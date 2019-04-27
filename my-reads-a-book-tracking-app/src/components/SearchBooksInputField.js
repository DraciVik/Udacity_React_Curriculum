import React from 'react';
import PropTypes from 'prop-types';

class SearchBooksInputField extends React.Component {
        state = {
                query: '',
        };

        handleChange = event => {
                const val = event.target.value;
                const { searchBooks } = this.props;
                this.setState({ query: val }, () => {
                        searchBooks(val);
                });
        };

        render() {
                const { query } = this.state;
                return (
                        <div className="search-books-input-wrapper">
                                <input
                                        value={query}
                                        onChange={this.handleChange}
                                        type="text"
                                        placeholder="Search by title or author"
                                />
                        </div>
                );
        }
}

SearchBooksInputField.propTypes = {
        searchBooks: PropTypes.func,
};
export default SearchBooksInputField;
