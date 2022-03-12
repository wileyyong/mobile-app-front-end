import React, { useEffect, useState } from 'react';
import EarthMapbox from './earth-mapbox';
import EarthGlobe from './earth-globe';

const Earth = ({ coordinates = [0, 0] }: { coordinates?: TCordinates }) => {
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

export default Earth;
