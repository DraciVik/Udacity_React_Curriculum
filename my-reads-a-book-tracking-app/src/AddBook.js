import React from 'react';
import PropTypes from 'prop-types';

const AddBookButton = props => (
    <div className="open-search">
        <button onClick={() => props.goToSearch()} type="button">
            Add a book
        </button>
    </div>
);
AddBookButton.propTypes = {
    goToSearch: PropTypes.func,
};

export default AddBookButton;
