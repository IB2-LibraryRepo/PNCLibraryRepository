import React, { useState } from 'react';
import './SearchBar.css';

// SearchBar component

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <div className='search-bar-container'>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleChange}
        />
        <div className='input-group-append'>
          <button
            className='btn btn-primary'
            type='button'
            onClick={() => setSearchTerm('')}
          >
            <i className='fa fa-search'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
