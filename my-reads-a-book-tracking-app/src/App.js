import React from 'react';
// import * as BooksAPI from './BooksAPI'
import Header from './Header.js';
import AddBookButton from './AddBook';
import Search from './SearchBook';
import './App.css';
import CurrentlyReadingComponent from './CurrentlyReading.js';
import WantToReadComponent from './WantToRead.js';
import ReadComponent from './Read';
import * as BookAPI from './BooksAPI';

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

    componentDidMount() {
        BookAPI.getAll().then(books => {
            this.setState({ books });
        });
    }

    handleMainPage = () => {
        this.setState(prevState => ({
            showSearchPage: !prevState.showSearchPage,
        }));
    };

    currentlyReading = () => {
        const { books } = this.state;
        const shelfBooks = books.filter(book => book.shelf === 'currentlyReading');
    };

    render() {
        const { showSearchPage } = this.state;
        return (
            <div className="app">
                {showSearchPage ? (
                    <Search goToMainPage={this.handleMainPage} />
                ) : (
                    <div className="list-books">
                        <Header />
                        <div className="list-books-content">
                            <div>
                                <CurrentlyReadingComponent />
                                <WantToReadComponent />
                                <ReadComponent />
                            </div>
                        </div>
                        <AddBookButton goToSearch={this.handleMainPage} />
                    </div>
                )}
            </div>
        );
    }
}

export default BooksApp;
