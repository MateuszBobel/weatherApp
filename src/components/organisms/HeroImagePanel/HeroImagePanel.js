import React from 'react';
import styles from './HeroImagePanel.module.css';
import heroImageSVG from './undraw_weather_d9t2.svg';

const HeroImagePanel = () => {
  const { heroImageContainer, slogan, heroImage } = styles;

  return (
    <div className={heroImageContainer}>
      <h1 className={slogan}>Different kinds of weather for almost 200K cities</h1>
      <img className={heroImage} src={heroImageSVG} alt='weather forecast' />
    </div>
  );
};

export default HeroImagePanel;
