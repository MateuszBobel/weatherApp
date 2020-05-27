import React from 'react';
import styles from './HighlightsPanel.module.css';
import Tiles from '../../atoms/Tiles/Tiles';
import PropTypes from 'prop-types';

const HighlightsPanel = ({ stateValue }) => {
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

HighlightsPanel.propTypes = {
  stateValue: PropTypes.object,
};

export default HighlightsPanel;
