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

  const onRegiionDidChange = async (e: any) => {
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
        onRegionDidChange={onRegiionDidChange}>
        <MapboxGL.Camera centerCoordinate={point} zoomLevel={2} />
      </MapboxGL.MapView>
    </View>
  );
};

export default Mapbox;
