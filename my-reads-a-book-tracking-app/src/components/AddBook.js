import React from 'react';
import { PropTypes } from 'prop-types';

function AddBookButton(props) {
        const { onNavigate } = props;
        return (
                <div className="open-search">
                        <button type="submit" onClick={onNavigate}>
                                Add a book
                        </button>
                </div>
        );
}

AddBookButton.propTypes = {
        onNavigate: PropTypes.func,
};

export default AddBookButton;
