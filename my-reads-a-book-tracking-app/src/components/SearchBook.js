import React from 'react';
import { PropTypes } from 'prop-types';
import { debounce } from 'throttle-debounce';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class SearchBook extends React.Component {
        state = {
                query: '',
                books: [],
        };

        loadBook = debounce(300, false, query => {
                // Invokes an Ajax call if the query length is bigger than 0
                // otherwise it clears the data. It then sets the state to an empty array
                // if there is no match (error is returned). Otherwise the state is set with the results

                if (query) {
                        BooksAPI.search(query).then(books => {
                                if (books.error) {
                                        this.setState({ books: [] });
                                } else {
                                        this.setState({ books });
                                }
                        });
                } else {
                        this.setState({ books: [] });
                }
        });

        updateQuery = query => {
                this.setState({ query });
        };

        resetSearch = () => {
                this.setState({ query: '', books: [] });
        };

        render() {
                const { query, books } = this.state;
                const { changeShelf } = this.props;
                let showBooks = [];

                if (query) {
                        showBooks = books;
                } else {
                        showBooks = [];
                }

                return (
                        <div className="search-books">
                                <div className="search-books-bar">
                                        <Link to="/">
                                                <button
                                                        type="submit"
                                                        className="close-search"
                                                        onClick={this.resetSearch}
                                                >
                                                        Close
                                                </button>
                                        </Link>
                                        <div className="search-books-input-wrapper">
                                                <input
                                                        onInput={event => this.updateQuery(event.target.value)}
                                                        value={query}
                                                        onChange={event => this.loadBook(event.target.value)}
                                                        type="text"
                                                        placeholder="Search by title or author"
                                                />
                                        </div>
                                </div>
                                <div className="search-books-results">
                                        <ol className="books-grid">
                                                {showBooks.map(book => (
                                                        <li key={book.id}>
                                                                <Book
                                                                        changeShelf={changeShelf}
                                                                        books={books}
                                                                        book={book}
                                                                />
                                                        </li>
                                                ))}
                                        </ol>
                                </div>
                        </div>
                );
        }
}

SearchBook.propTypes = {
        changeShelf: PropTypes.func,
};

export default SearchBook;
