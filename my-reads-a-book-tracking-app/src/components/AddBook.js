import React from 'react';

function AddBookButton(props) {
        return (
                <div className="open-search">
                        <button type="submit" onClick={props.onNavigate}>
                                Add a book
                        </button>
                </div>
        );
}

export default AddBookButton;
