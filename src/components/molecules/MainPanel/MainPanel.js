import React from 'react';
import styles from './MainPanel.module.css';
import SearchInput from '../../atoms/SearchInput/SearchInput';
import SearchButton from '../../atoms/SearchButton/SearchButton';
import sun from './sun-192x192.png';

const mainPanel = () => {
  return (
    <div className={styles.mainPanel}>
      <SearchInput />
      <div className={styles.weatherBigLogo}>
        <img src={sun} alt='sun' />
      </div>
      <div className={styles.weatherPanel}>
        <p className={styles.mainTemp}>12 C</p>
        <p className={styles.dayOfWeek}>
          Monday,
          <span className={styles.time}> 15:00</span>
        </p>
        <div className={styles.cloud}>
          <span className='fas fa-cloud'></span>
          <p className={styles.cloudInfo}>Cloudy</p>
        </div>
        <div className={styles.rain}>
          <span className='fas fa-cloud-rain'></span>
          <p className={styles.rainInfo}>Rain</p>
        </div>
        <SearchButton />
      </div>
    </div>
  );
};

export default mainPanel;
