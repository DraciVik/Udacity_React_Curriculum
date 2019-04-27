import React from 'react';
import { Route } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Header from './components/Header';
import AddBookButton from './components/AddBook';
import SearchBook from './components/SearchBook';
import BookShelfs from './components/BookShelfs';

class BooksApp extends React.Component {
        state = {
                books: [],
                searchedBooks: [],
        };

        searchBooks = debounce(300, false, query => {
                // Invokes an Ajax call if the query length is bigger than 0
                // otherwise it clears the data. It then sets the state to an empty array
                // if there is no match (error is returned). Otherwise the state is set with the results

                if (query.length > 0) {
                        BooksAPI.search(query).then(books1 => {
                                if (books1.error) {
                                        this.setState({ searchedBooks: [] });
                                } else {
                                        this.setState({ searchedBooks: books1 });
                                }
                        });
                } else {
                        this.setState({ searchedBooks: [] });
                }
        });

        componentDidMount() {
                // Puts all the books in state
                BooksAPI.getAll().then(books => {
                        this.setState({ books });
                });
        }

        resetSearch = () => {
                this.setState({ searchedBooks: [] });
        };

        changeShelf = (book, shelf) => {
                // Updates the shelf depending in the user selection then injects the books into state
                BooksAPI.update(book, shelf);

                if (shelf === 'none') {
                        this.setState(prevState => ({
                                books: prevState.books.filter(b => b.id !== book.id),
                        }));
                } else {
                        book.shelf = shelf;
                        this.setState(prevState => ({
                                books: prevState.books.filter(b => b.id !== book.id).concat(book),
                        }));
                }
        };

        render() {
                const { books, searchedBooks } = this.state;
                return (
                        <div className="app">
                                <Route
                                        path="/searchBooks"
                                        render={() => (
                                                <SearchBook
                                                        myBooks={books}
                                                        searchedBooks={searchedBooks}
                                                        searchBooks={this.searchBooks}
                                                        changeShelf={this.changeShelf}
                                                        resetSearch={this.resetSearch}
                                                />
                                        )}
                                />
                                <Route
                                        exact
                                        path="/"
                                        render={() => (
                                                <div className="list-books">
                                                        <Header />
                                                        <BookShelfs changeShelf={this.changeShelf} books={books} />
                                                        <AddBookButton />
                                                </div>
                                        )}
                                />
                        </div>
                );
        }
}

export default BooksApp;
