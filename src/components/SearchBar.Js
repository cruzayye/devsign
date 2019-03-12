import React from 'react';
import PropTypes from 'prop-types';
export default function SearchBar({ searchBarName, searchInput, onChange }) {
  return ( 
    <input type="text" name={searchBarName} value={searchInput} onChange={onChange} />
  );
}

SearchBar.propTypes = {
  searchBarName: PropTypes.string,
  searchInput: PropTypes.string,
  onChange: PropTypes.func
};
