import React from 'react';
import styles from './SearchButton.module.css';

const SearchButton = ({ click }) => (
  <button onClick={click} className={styles.searchBtn}>
    Search
  </button>
);

export default SearchButton;
