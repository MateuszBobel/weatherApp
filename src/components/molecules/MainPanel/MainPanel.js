import React from 'react';
import styles from './MainPanel.module.css';
import sun from './sun-192x192.png';
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
            currentWeather: {
              location: response.name,
              mainTemperature: response.main.temp,
              cloudiness: response.weather[0].description,
              windSpeed: response.wind.speed,
            },
          })
        )
        .catch((error) => console.log(error, 'Error'));
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

  const { cloudiness, location, mainTemperature, windSpeed } = stateValue.currentWeather;
  const {
    mainPanel,
    weatherBigLogo,
    weatherPanel,
    cityName,
    mainTemp,
    dayOfWeek,
    cloud,
    cloudInfo,
    wind,
    windInfo,
  } = styles;

  return (
    <div className={mainPanel}>
      <SearchInput stateValue={stateValue} setStateValue={setStateValue} />

      <div className={weatherBigLogo}>
        <img src={sun} alt='sun' />
      </div>

      <div className={weatherPanel}>
        <p className={cityName}>{location}</p>
        <p className={mainTemp}>{Math.floor(mainTemperature)}&deg;C</p>
        <p className={dayOfWeek}>
          {getCurrentTime('day')},<span className={styles.time}> {getCurrentTime('time')}</span>
        </p>

        <div className={cloud}>
          <span className='fas fa-cloud'></span>
          <p className={cloudInfo}>{cloudiness}</p>
        </div>

        <div className={wind}>
          <span className='fas fa-wind'></span>
          <p className={windInfo}>{windSpeed} km/h</p>
        </div>
      </div>

      <SearchButton getCurrentWeather={getCurrentWeather} />
    </div>
  );
};

export default mainPanel;
