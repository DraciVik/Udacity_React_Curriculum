import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends React.Component {
    state = {
        query: '',
        results: [],
    };

    handleQueryChange(event) {
        const query = event.target.value;
        this.setState({ query });

        this.performSearch(query);
    }

    performSearch(query) {
        if (query === '' || query === undefined) {
            this.setState({ results: [] });
        }

        BooksAPI.search(query).then(books => {
            if (books.constructor === Array) {
                this.setState({ results: books });
            } else {
                this.setState({ results: [] });
            }
        });
    }

    render() {
        const { query } = this.state;
        const { books } = this.props;
        const { changeShelf } = this.props;
        const { results } = this.state;
        let message;

        if (query === '') {
            message = <h2 style={{ textAlign: 'center' }}>Write one ore more keywords above to start searching</h2>;
        } else if (results.length === 0) {
            message = (
                <h2 style={{ textAlign: 'center' }}>No results found. Try searching under different keywords.</h2>
            );
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={event => this.handleQueryChange(event)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {message}
                    <ol className="books-grid">
                        {results.map(book => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    books={books}
                                    changeShelf={changeShelf}
                                    title={book.title}
                                    author={book.authors}
                                    image={book.imageLinks.thumbnail}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

Search.propTypes = { books: PropTypes.array, changeShelf: PropTypes.func.isRequired };

export default Search;
