import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './App.module.css';
import MainPanel from '../components/organisms/MainPanel/MainPanel';
import HighlightsPanel from '../components/organisms/HighlightsPanel/HighlightsPanel';

function App() {
  useEffect(() => {
    setStateValue({
      ...stateValue,
      isLoaded: true,
    });
  }, []);

  const [stateValue, setStateValue] = useState({
    inputValue: '',
    isError: false,
    isLoaded: false,

    currentWeather: {
      location: '',
      description: '',
      cloudiness: '',
      mainTemperature: 0,
      windSpeed: 0,
    },

    highlightParameters: {
      minTemp: 0,
      maxTemp: 0,
      sunrise: 0,
      sunset: 0,
      visibility: 0,
      humidity: 0,
      pressure: 0,
    },
  });

  return (
    <div className={styles.App}>
      {stateValue.isLoaded ? (
        <Loader
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          type='ThreeDots'
          color='#000'
          height={100}
          width={100}
          timeout={5000}
        />
      ) : (
        <>
          <MainPanel stateValue={stateValue} setStateValue={setStateValue} />
          <HighlightsPanel stateValue={stateValue.highlightParameters} />
        </>
      )}
    </div>
  );
}

export default App;
