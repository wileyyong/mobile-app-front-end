import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import EarthMapbox from './earth-mapbox';
import EarthGlobe from './earth-globe';

const Earth = ({ coordinates }) => {
  const [isGlobeMode, setIsGlobeMode] = useState(true);
  const [point, setPoint] = useState(coordinates);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {}, []);

  return (
    <>
      {isGlobeMode ? (
        <EarthGlobe
          point={point}
          setPoint={setPoint}
          setZoom={setZoom}
          zoom={zoom}
          onExitMode={() => setIsGlobeMode(false)}
        />
      ) : (
        <EarthMapbox
          point={point}
          setPoint={setPoint}
          setZoom={setZoom}
          zoom={zoom}
          onExitMode={() => setIsGlobeMode(true)}
        />
      )}
    </>
  );
};

Earth.defaultProps = {
  coordinates: [0, 0],
};

Earth.propTypes = {
  // geolocation coordinates for initial point
  coordinates: PropTypes.arrayOf(PropTypes.number),
};

export default Earth;
