import React from 'react';
import styles from './SearchButton.module.css';
import PropTypes from 'prop-types';

const SearchButton = ({ getCurrentWeather }) => (
  <button onClick={getCurrentWeather} className={styles.searchBtn}>
    Search
  </button>
);

SearchButton.propTypes = {
  getCurrentWeather: PropTypes.func.isRequired,
};

export default SearchButton;
