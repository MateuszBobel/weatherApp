import React from 'react';
import styles from './SearchButton.module.css';

const SearchButton = ({ getCurrentWeather }) => (
  <button onClick={getCurrentWeather} className={styles.searchBtn}>
    Search
  </button>
);

export default SearchButton;
