import { MAPBOX_SWITCH_THRESHOLD } from '$constants';

import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

import { MAPBOX_ACCESS_TOKEN } from '@env';

import styles from './style';

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

interface IMapBox {
  onExitMode: () => void;
  point: number[];
  setPoint: (coordinates: number[]) => void;
}

const Mapbox = ({ point, setPoint, onExitMode }: IMapBox) => {
  const mapRef = useRef(null);

  const onRegionDidChange = async (e: any) => {
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
        onRegionDidChange={onRegionDidChange}>
        <MapboxGL.Camera
          animationMode="moveTo"
          centerCoordinate={point}
          zoomLevel={MAPBOX_SWITCH_THRESHOLD}
        />
      </MapboxGL.MapView>
    </View>
  );
};

export default Mapbox;
