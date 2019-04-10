import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Header from './components/Header';
import AddBookButton from './components/AddBook';
import BookShelf from './components/BookShelf';
import SearchBook from './components/SearchBook';

class BooksApp extends React.Component {
        state = {
                /**
                 * TODO: Instead of using this state variable to keep track of which page
                 * we're on, use the URL in the browser's address bar. This will ensure that
                 * users can use the browser's back and forward buttons to navigate between
                 * pages, as well as provide a good URL they can bookmark and share.
                 */
                showSearchPage: false,
        };

        changePage() {
                const { showSearchPage } = this.state;
                this.setState({
                        showSearchPage: !showSearchPage,
                });
        }

        render() {
                const { showSearchPage } = this.state;
                return (
                        <div className="app">
                                {showSearchPage ? (
                                        // TODO Fix lifting state up
                                        <SearchBook changePage={this.changePage} />
                                ) : (
                                        <div className="list-books">
                                                <Header />
                                                <div className="list-books-content">
                                                        <div>
                                                                <BookShelf bookShelf="Currently Reading" />
                                                                <BookShelf bookShelf="Want to read" />
                                                                <BookShelf bookShelf="Read" />
                                                        </div>
                                                </div>
                                                <AddBookButton
                                                        onNavigate={() => this.setState({ showSearchPage: true })}
                                                />
                                        </div>
                                )}
                        </div>
                );
        }
}

export default BooksApp;
