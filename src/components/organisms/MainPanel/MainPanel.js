import React from 'react';
import styles from './MainPanel.module.css';

import sun from './sun-192x192.png';
import sunWithClouds from './sun-with-clouds-192x192.png';
import snow from './snow-192x192.png';
import clouds from './clouds-192x192.png';
import rain from './rain-192x192.png';
import drizzle from './drizzle-192x192.png';
import thunderstorm from './thunderstorm-192x192.png';
import errorImage from './undraw_cancel_u1it.svg';

import SearchInput from '../../atoms/SearchInput/SearchInput';
import SearchButton from '../../atoms/SearchButton/SearchButton';

const mainPanel = ({ stateValue, setStateValue }) => {
  const getCurrentWeather = () => {
    const APIkey = '3b457a2b4c41d8d6fda62224d0b00c8b';
    const searchingCity = stateValue.inputValue;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchingCity}&appid=${APIkey}&units=metric`;

    if (searchingCity !== '') {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response;
          } else throw Error(response.statusText);
        })
        .then((response) => response.json())
        .then((response) =>
          setStateValue({
            ...stateValue,
            inputValue: '',
            isError: false,
            currentWeather: {
              location: response.name,
              description: response.weather[0].main,
              mainTemperature: response.main.temp,
              cloudiness: response.weather[0].description,
              windSpeed: response.wind.speed,
            },
          })
        )
        .catch((error) => {
          setStateValue({
            ...stateValue,
            inputValue: '',
            isError: true,
          });
        });
    }
  };

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
    mainPanel,
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

  const { isError } = stateValue;

  return (
    <div className={mainPanel}>
      <SearchInput stateValue={stateValue} setStateValue={setStateValue} />

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
      <SearchButton getCurrentWeather={getCurrentWeather} />
    </div>
  );
};

export default mainPanel;
