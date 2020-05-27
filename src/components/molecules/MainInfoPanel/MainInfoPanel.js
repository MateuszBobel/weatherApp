import React from 'react';
import styles from './MainInfoPanel.module.css';

import sun from './sun-192x192.png';
import sunWithClouds from './sun-with-clouds-192x192.png';
import snow from './snow-192x192.png';
import clouds from './clouds-192x192.png';
import rain from './rain-192x192.png';
import drizzle from './drizzle-192x192.png';
import thunderstorm from './thunderstorm-192x192.png';
import errorImage from './undraw_cancel_u1it.svg';

const MainInfoPanel = ({ stateValue }) => {
  const getCurrentTime = (type) => {
    const today = new Date();
    if (type === 'day') {
      const weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      const day = weekday[today.getDay()];
      return day;
    } else if (type === 'time') {
      const hours = today.getHours() < 10 ? `0${today.getHours()}` : `${today.getHours()}`;
      const minutes = today.getMinutes() < 10 ? `0${today.getMinutes()}` : `${today.getMinutes()}`;
      const time = `${hours}:${minutes}`;
      return time;
    }
  };

  const changeWeatherBigLogo = (weatherType) => {
    if (weatherType === 'Clouds') {
      return clouds;
    } else if (weatherType === 'Clear') {
      return sun;
    } else if (weatherType === 'Snow') {
      return snow;
    } else if (weatherType === 'Rain') {
      return rain;
    } else if (weatherType === 'Drizzle') {
      return drizzle;
    } else if (weatherType === '"Thunderstorm"') {
      return thunderstorm;
    } else return sunWithClouds;
  };

  const {
    cloudiness,
    location,
    description,
    mainTemperature,
    windSpeed,
  } = stateValue.currentWeather;
  const {
    weatherBigLogo,
    weatherPanel,
    cityName,
    mainTemp,
    dayOfWeek,
    cloudSymbol,
    cloudInfo,
    windSymbol,
    windInfo,
    error,
    errorMessage,
    errorSymbol,
    mainInfoWrapper,
    mainInfo,
    errorImg,
  } = styles;

  const isError = stateValue.isError;

  return (
    <div className={weatherPanel}>
      <div className={mainInfoWrapper}>
        <div className={weatherBigLogo}>
          <img
            className={isError ? errorImg : null}
            src={isError ? errorImage : changeWeatherBigLogo(description)}
            alt={isError ? 'error' : 'sun'}
          />
        </div>
        <div className={mainInfo}>
          <p className={isError ? error : cityName}>{isError ? 'Oops...' : location}</p>
          <p className={isError ? error : mainTemp}>
            {isError ? 'sth goes wrong' : `${Math.floor(mainTemperature)} \u00b0C`}
          </p>
          <p className={dayOfWeek}>
            {getCurrentTime('day')},<span className={styles.time}> {getCurrentTime('time')}</span>
          </p>
        </div>
      </div>

      {isError ? (
        <div className={errorSymbol}>
          <span>
            <i className='fas fa-exclamation-triangle'></i>
          </span>
          <p className={errorMessage}>City name was probably incorrect, please try again</p>
        </div>
      ) : (
        <div>
          <div className={cloudSymbol}>
            <span>
              <i className='fas fa-cloud'></i>
            </span>
            <p className={cloudInfo}>{cloudiness}</p>
          </div>

          <div className={windSymbol}>
            <span>
              <i className='fas fa-wind'></i>
            </span>
            <p className={windInfo}>{windSpeed} km/h</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainInfoPanel;
