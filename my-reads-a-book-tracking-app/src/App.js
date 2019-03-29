import React from 'react';
import { Route } from 'react-router-dom';
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

    handleChangeShelf = (selectedBook, updatedShelf) => {
        BooksAPI.update(selectedBook, updatedShelf).then(() => {
            this.getBooks();
        });
    };

    render() {
        const { books } = this.state;

        return (
            <div className="app">
                <Route
                    exact
                    path="/"
                    render={() => (
                        <div className="list-books">
                            <Header />
                            <div className="list-books-content">
                                <div>
                                    <CurrentlyReadingComponent changeShelf={this.handleChangeShelf} books={books} />
                                    <WantToReadComponent changeShelf={this.handleChangeShelf} books={books} />
                                    <ReadComponent changeShelf={this.handleChangeShelf} books={books} />
                                </div>
                            </div>
                            <AddBookButton />
                        </div>
                    )}
                />
                <Route path="/search" render={() => <Search changeShelf={this.handleChangeShelf} books={books} />} />
            </div>
        );
    }
}

export default BooksApp;
