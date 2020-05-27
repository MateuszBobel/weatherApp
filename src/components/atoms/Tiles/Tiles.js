import React from 'react';
import styles from './Tiles.module.css';

const Tiles = ({ title, mainInfo }) => {
  const convertTime = (number) => {
    const time = new Date(number * 1000).toLocaleTimeString().slice(0, 5);
    return time;
  };

  const { tileContainer, tileTitle, tileMainInfo } = styles;

  return (
    <div className={tileContainer}>
      <p className={tileTitle}>{title}</p>
      {title === 'sunrise' || title === 'sunset' ? (
        <p className={tileMainInfo}>{convertTime(mainInfo)}</p>
      ) : (
        <p className={tileMainInfo}>{mainInfo}</p>
      )}
    </div>
  );
};

export default Tiles;
