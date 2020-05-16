import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';
import styles from './App.module.css';
import SearchInput from '../components/atoms/SearchInput/SearchInput';

function App() {
  return (
    <div className={styles.App}>
      <SearchInput />
    </div>
  );
}

export default App;
