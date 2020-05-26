import React from 'react';
import styles from './HighlightsPanel.module.css';
import Tiles from '../../atoms/Tiles/Tiles';

const HighlightsPanel = ({ stateValue }) => {
  //napisać funkcję która iteruje i wyświetla kafelki

  const hightlights = Object.entries(stateValue).map(([key, value], i) => (
    <Tiles key={i} title={key} mainInfo={value} />
  ));

  const { hightlightContainer, hightlightTitle } = styles;

  return (
    <div className={hightlightContainer}>
      <p className={hightlightTitle}>Today's Highlights</p>
      {hightlights}
    </div>
  );
};

export default HighlightsPanel;
