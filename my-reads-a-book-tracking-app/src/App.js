import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Header from './components/Header';
import AddBookButton from './components/AddBook';
import SearchBook from './components/SearchBook';
import BookShelfs from './components/BookShelfs';

class BooksApp extends React.Component {
        state = {
                /**
                 * TODO: Instead of using this state variable to keep track of which page
                 * we're on, use the URL in the browser's address bar. This will ensure that
                 * users can use the browser's back and forward buttons to navigate between
                 * pages, as well as provide a good URL they can bookmark and share.
                 */
                books: [],
                showSearchPage: false,
        };

        componentDidMount() {
                BooksAPI.getAll().then(books => {
                        this.setState({ books });
                });
        }

        changeShelf = (book, shelf) => {
                BooksAPI.update(book, shelf).then(() => {
                        BooksAPI.getAll().then(books => {
                                this.setState({ books });
                        });
                });
        };

        changePage = () => {
                const { showSearchPage } = this.state;
                this.setState({
                        showSearchPage: !showSearchPage,
                });
        };

        render() {
                const { showSearchPage } = this.state;
                const { books } = this.state;
                return (
                        <div className="app">
                                {showSearchPage ? (
                                        // TODO Fix lifting state up
                                        <SearchBook onNavigate={this.changePage} />
                                ) : (
                                        <div className="list-books">
                                                <Header />
                                                <BookShelfs changeShelf={this.changeShelf} books={books} />
                                                <AddBookButton onNavigate={this.changePage} />
                                        </div>
                                )}
                        </div>
                );
        }
}

export default BooksApp;
