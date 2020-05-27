import React, { useEffect } from 'react';
import styles from './MainPanel.module.css';
import PropTypes from 'prop-types';

import SearchInput from '../../atoms/SearchInput/SearchInput';
import SearchButton from '../../atoms/SearchButton/SearchButton';
import MainInfoPanel from '../../molecules/MainInfoPanel/MainInfoPanel';

const MainPanel = ({ stateValue, setStateValue }) => {
  useEffect(() => {
    const url = 'https://ipapi.co/json/';

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response;
        } else throw Error(response.statusText);
      })
      .then((response) => response.json())
      .then((response) => {
        const initialCity = response.city;
        getCurrentWeather(initialCity);
      })
      .catch((error) => {
        setStateValue({
          ...stateValue,
          isError: true,
        });
      });
  }, []);

  const getCurrentWeather = (city) => {
    const APIkey = '3b457a2b4c41d8d6fda62224d0b00c8b';
    const searchingCity = city;
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
            highlightParameters: {
              minTemp: `${response.main.temp_min} \u00b0C`,
              maxTemp: `${response.main.temp_max} \u00b0C`,
              sunrise: response.sys.sunrise,
              sunset: response.sys.sunset,
              humidity: `${response.main.humidity} %`,
              pressure: `${response.main.pressure} hPa`,
            },
          })
        )
        .catch((error) => {
          setStateValue({
            ...stateValue,
            inputValue: '',
            isError: true,
            highlightParameters: {
              minTemp: ' --- ',
              maxTemp: ' --- ',
              sunrise: 0,
              sunset: 0,
              humidity: ' --- ',
              pressure: ' --- ',
            },
          });
        });
    }
  };

  const { inputValue } = stateValue;

  return (
    <div className={styles.mainPanel}>
      <SearchInput
        getCurrentWeather={() => getCurrentWeather(inputValue)}
        stateValue={stateValue}
        setStateValue={setStateValue}
      />
      <MainInfoPanel stateValue={stateValue} />
      <SearchButton getCurrentWeather={() => getCurrentWeather(inputValue)} />
    </div>
  );
};

MainInfoPanel.propTypes = {
  tateValue: PropTypes.object,
  setStateValue: PropTypes.func,
};

export default MainPanel;
