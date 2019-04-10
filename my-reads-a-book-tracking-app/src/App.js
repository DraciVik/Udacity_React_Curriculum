import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Header from './components/Header';
import AddBookButton from './components/AddBook';
import BookShelf from './components/BookShelf';

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

        render() {
                const { showSearchPage } = this.state;
                return (
                        <div className="app">
                                {showSearchPage ? (
                                        <div className="search-books">
                                                <div className="search-books-bar">
                                                        <button
                                                                type="submit"
                                                                className="close-search"
                                                                onClick={() => this.setState({ showSearchPage: false })}
                                                        >
                                                                Close
                                                        </button>
                                                        <div className="search-books-input-wrapper">
                                                                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                                                                <input
                                                                        type="text"
                                                                        placeholder="Search by title or author"
                                                                />
                                                        </div>
                                                </div>
                                                <div className="search-books-results">
                                                        <ol className="books-grid" />
                                                </div>
                                        </div>
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
