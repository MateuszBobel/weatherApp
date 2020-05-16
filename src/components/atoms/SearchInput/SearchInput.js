import React, { useState } from 'react';
import styles from './SearchInput.module.css';

const SearchInput = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <div className={styles.wrap}>
      <div className={styles.search}>
        <div className={styles.searchIcon}>
          <span className='fas fa-search'></span>
        </div>
        <input
          className={styles.searchInput}
          type='search'
          name='search'
          placeholder='Search place...'
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
