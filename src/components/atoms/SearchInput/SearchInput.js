import React from 'react';
import styles from './SearchInput.module.css';

const SearchInput = ({ stateValue, setStateValue }) => {
  const handleInputChange = (e) => {
    setStateValue({
      ...stateValue,
      inputValue: e.target.value,
    });
  };

  const { wrap, search, searchIcon, searchInput } = styles;

  return (
    <div className={wrap}>
      <div className={search}>
        <div className={searchIcon}>
          <span className='fas fa-search'></span>
        </div>
        <input
          className={searchInput}
          type='search'
          name='search'
          value={stateValue.inputValue}
          placeholder='Search place...'
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
