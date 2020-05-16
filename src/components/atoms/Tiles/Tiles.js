import React from 'react';
import styles from './Tiles.module.css';

const Tiles = (props) => {
  return (
    <div className={styles.tiles}>
      <p className={styles.day}>Mon</p>
      <div className={styles.image}></div>
      <p className={styles.dayTemp}>
        15 C<span className={styles.nightTemp}>3C</span>
      </p>
    </div>
  );
};

export default Tiles;
