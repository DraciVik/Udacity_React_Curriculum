import React from 'react';
import * as BooksAPI from './BooksAPI';
import Header from './Header.js';
import AddBookButton from './AddBook';
import Search from './SearchBook';
import './App.css';
import CurrentlyReadingComponent from './CurrentlyReading.js';
import WantToReadComponent from './WantToRead.js';
import ReadComponent from './Read';

class BooksApp extends React.Component {
    state = {
        books: [],
        showSearchPage: false,
    };

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        BooksAPI.getAll().then(books => {
            this.setState({
                books,
            });
        });
    };

    handleMainPage = () => {
        this.setState(prevState => ({
            showSearchPage: !prevState.showSearchPage,
        }));
    };

    handleChangeShelf = (selectedBook, updatedShelf) => {
        BooksAPI.update(selectedBook, updatedShelf).then(() => {
            this.getBooks();
        });
    };

    render() {
        const { showSearchPage } = this.state;
        const { books } = this.state;

        return (
            <div className="app">
                {showSearchPage ? (
                    <Search changeShelf={this.handleChangeShelf} books={books} goToMainPage={this.handleMainPage} />
                ) : (
                    <div className="list-books">
                        <Header />
                        <div className="list-books-content">
                            <div>
                                <CurrentlyReadingComponent changeShelf={this.handleChangeShelf} books={books} />
                                <WantToReadComponent changeShelf={this.handleChangeShelf} books={books} />
                                <ReadComponent changeShelf={this.handleChangeShelf} books={books} />
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
