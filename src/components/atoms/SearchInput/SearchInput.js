import React from 'react';
import styles from './SearchInput.module.css';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import PropTypes from 'prop-types';

const SearchInput = ({ stateValue, setStateValue, getCurrentWeather }) => {
  const handleInputChange = (e) => {
    setStateValue({
      ...stateValue,
      inputValue: e.target.value,
    });
  };

  const { wrap, search, searchIcon, searchInput } = styles;

  return (
    <KeyboardEventHandler handleKeys={['enter']} onKeyEvent={(key, e) => getCurrentWeather()}>
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
    </KeyboardEventHandler>
  );
};

SearchInput.propTypes = {
  stateValue: PropTypes.object.isRequired,
  setStateValue: PropTypes.func.isRequired,
  getCurrentWeather: PropTypes.func.isRequired,
};

export default SearchInput;
