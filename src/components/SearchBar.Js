import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({ seachBarName, searchInput, onChange }) {
  return ( 
    <input type="text" name={seachBarName} value={searchInput} onChange={onChange} />
  );
}

SearchBar.propTypes = {
  seachBarName: PropTypes.string,
  searchInput: PropTypes.string,
  onChange: PropTypes.func
}
;
