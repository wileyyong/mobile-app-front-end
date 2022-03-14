import { MAPBOX_SWITCH_THRESHOLD } from '$constants';

import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-unresolved
import { MAPBOX_ACCESS_TOKEN } from '@env';

import styles from './style';

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

const Mapbox = ({ point, setPoint, onExitMode, setZoom }) => {
  const mapRef = useRef(null);

  const onRegionDidChange = async (e) => {
    // check zoom Level and switch to GlobeView
    if (e.properties.zoomLevel < MAPBOX_SWITCH_THRESHOLD) {
      // set current selected point
      if (e.geometry && e.geometry.coordinates) {
        setPoint(e.geometry.coordinates);
        setZoom(MAPBOX_SWITCH_THRESHOLD - 0.1);
      }
      onExitMode();
    }
  };

  useEffect(() => {}, [mapRef]);

  return (
    <View style={styles.container}>
      <MapboxGL.MapView
        ref={mapRef}
        rotateEnabled={false}
        style={styles.map}
        styleURL={MapboxGL.StyleURL.SatelliteStreet}
        onRegionDidChange={onRegionDidChange}
      >
        <MapboxGL.Camera
          animationMode="moveTo"
          centerCoordinate={point}
          zoomLevel={MAPBOX_SWITCH_THRESHOLD}
        />
      </MapboxGL.MapView>
    </View>
  );
};

Mapbox.defaultProps = {
  onExitMode: () => {},
  point: [0, 0],
  setPoint: () => {},
  setZoom: () => {},
};

Mapbox.propTypes = {
  // Earth Globe callback on return
  onExitMode: PropTypes.func,
  // Earth Globe coordinate
  point: PropTypes.arrayOf(PropTypes.number),
  // Earth Globe setPoint callback
  setPoint: PropTypes.func,
  // Earth Globe setZoom
  setZoom: PropTypes.func,
};

export default Mapbox;
