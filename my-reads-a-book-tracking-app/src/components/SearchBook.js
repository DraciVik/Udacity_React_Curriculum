import React from 'react';
import { PropTypes } from 'prop-types';
import * as BooksAPI from '../BooksAPI';

class SearchBook extends React.Component {
        state = {
                query: '',
                loading: false,
                books: [],
        };

        updateSearch = query => {
                this.showLoading();
                this.setState({ query });

                if (!query) {
                        this.hideLoading();
                        this.props.onSearchUpdate(query, []);
                }
                this.doSearch();
        };

        showLoading() {
                this.setState({ loading: true });
        }

        hideLoading() {
                this.setState({ loading: false });
        }

        render() {
                const { query } = this.state;
                const { onNavigate } = this.props;
                return (
                        <div className="search-books">
                                <div className="search-books-bar">
                                        <button type="submit" className="close-search" onClick={onNavigate}>
                                                Close
                                        </button>
                                        <div className="search-books-input-wrapper">
                                                <input
                                                        value={query}
                                                        onChange={event => this.updateSearch(event.target.value)}
                                                        type="text"
                                                        placeholder="Search by title or author"
                                                />
                                        </div>
                                </div>
                                <div className="search-books-results">{content} </div>
                        </div>
                );
        }
}

SearchBook.propTypes = {
        onNavigate: PropTypes.func,
};

export default SearchBook;
