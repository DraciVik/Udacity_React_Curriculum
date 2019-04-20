import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Header from './components/Header';
import AddBookButton from './components/AddBook';
import SearchBook from './components/SearchBook';
import BookShelfs from './components/BookShelfs';

class BooksApp extends React.Component {
        state = {
                books: [],
        };

        componentDidMount() {
                // Puts all the books in state
                BooksAPI.getAll().then(books => {
                        this.setState({ books });
                });
        }

        changeShelf = (book, shelf) => {
                // Updates the shelf depending in the user selection then injects the books into state
                BooksAPI.update(book, shelf);

                const { books } = this.state;
                let updatedBooks = [];
                updatedBooks = books.filter(b => b.id !== book.id);

                if (shelf !== 'none') {
                        book.shelf = shelf;
                        updatedBooks = updatedBooks.concat(book);
                }
                this.setState({
                        books: updatedBooks,
                });
        };

        render() {
                const { books } = this.state;
                return (
                        <div className="app">
                                <Route
                                        path="/searchBooks"
                                        render={() => <SearchBook myBooks={books} changeShelf={this.changeShelf} />}
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
