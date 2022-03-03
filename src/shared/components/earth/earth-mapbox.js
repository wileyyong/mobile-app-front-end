import { MAPBOX_SWITCH_THRESHOLD } from '$constants';

import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-unresolved
import { MAPBOX_ACCESS_TOKEN } from '@env';

import styles from './style';

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

const Mapbox = ({ point, setPoint, onExitMode }) => {
  const mapRef = useRef(null);

  const onRegiionDidChange = async (e) => {
    // check zoom Level and switch to GlobeView
    if (e.properties.zoomLevel < MAPBOX_SWITCH_THRESHOLD) {
      // set current selected point
      if (e.geometry && e.geometry.coordinates) {
        setPoint(e.geometry.coordinates);
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
        styleURL={MapboxGL.StyleURL.Satellite}
        onRegionDidChange={onRegiionDidChange}
      >
        <MapboxGL.Camera centerCoordinate={point} zoomLevel={2} />
      </MapboxGL.MapView>
    </View>
  );
};

Mapbox.defaultProps = {
  onExitMode: () => {},
  point: [0, 0],
  setPoint: () => {},
};

Mapbox.propTypes = {
  // Earth Globe callback on return
  onExitMode: PropTypes.func,
  // Earth Globe coordinate
  point: PropTypes.arrayOf(PropTypes.number),
  // Earth Globe setPoint callback
  setPoint: PropTypes.func,
};

export default Mapbox;
