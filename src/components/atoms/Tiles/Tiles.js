import React from 'react';
import styles from './Tiles.module.css';

const Tiles = ({ title, mainInfo }) => {
  const convertTime = (number) => {
    const time = new Date(number * 1000).toLocaleTimeString().slice(0, 5);
    return time;
  };

  return (
    <div className={styles.tiles}>
      <p className={styles.title}>{title}</p>
      {title === 'sunrise' || title === 'sunset' ? (
        <p className={styles.mainInfo}>{convertTime(mainInfo)}</p>
      ) : (
        <p className={styles.mainInfo}>{mainInfo}</p>
      )}
      {/* <p className={styles.intensity}>{intensity}</p> */}
    </div>
  );
};

export default Tiles;
