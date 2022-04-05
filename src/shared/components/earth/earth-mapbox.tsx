import {
  MAPBOX_SWITCH_THRESHOLD,
  MAPBOX_MARKER_BUNDLE_THRESHOLD,
} from '$constants';

import {Pozzles} from '$api';

import React, { useEffect, useRef, useState } from 'react';
import { ImageSourcePropType, View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

import { MAPBOX_ACCESS_TOKEN } from '@env';

import styles from './style';
import MapboxMarkers from '../mapbox-markers';
import { pozzleModel } from 'src/shared/api/pozzles/models';

const imgVideo1 = require('src/assets/images/video1.png');
const imgVideo2 = require('src/assets/images/video2.png');

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

interface IMarker {
  coordinate: [number, number];
  image: ImageSourcePropType;
  region: string;
}

interface IMapBox {
  onExitMode: () => void;
  point: number[];
  setPoint: (coordinates: [number, number]) => void;
  setZoom: (zoom: number) => void;
  zoom: number;
}
interface IRenderMarkerType {
  images: ImageSourcePropType[];
  coordinate: [number, number];
  index: number;
}

const Mapbox = ({ point, setPoint, onExitMode, setZoom, zoom }: IMapBox) => {
  const mapRef = useRef(null);
  const [pozzles, setPozzles] = useState([]);
  const [filteredMarkers, setFilteredMarkers] = useState<IRenderMarkerType[]>([],
  );
  const [isBundleMode, setIsBundleMode] = useState(true);
  const [coordinates, setCoordinates] = useState(point);
  const [curZoom, setCurZoom] = useState(zoom);

  const getPozzles = (long: number, lat: number, zoom: number) => {
    Pozzles.get({long: long, lat: lat, zoom: zoom }).then((response)=>{
      setPozzles(response.data || []);
    });
  }

  const RenderMarker = ({ images, coordinate, index }: IRenderMarkerType) => {
    const id = `point${index}`;
    return (
      <MapboxGL.PointAnnotation key={id} id={id} coordinate={coordinate}>
        <MapboxMarkers images={images} />
      </MapboxGL.PointAnnotation>
    );
  };

  const onRegionDidChange = async (e: any) => {
    if(e.geometry && e.geometry.coordinates){
      const [long, lat] = e.geometry.coordinates;
      getPozzles(long, lat, e.properties.zoomLevel);
    }
    // check zoom Level and switch to GlobeView
    /* if (e.properties.zoomLevel < MAPBOX_MARKER_BUNDLE_THRESHOLD) {
      setIsBundleMode(true);
    } else {
      setIsBundleMode(false);
    } */
  };
  const onRegionIsChanging = async (e: any) => {
    if (e.properties.zoomLevel < MAPBOX_SWITCH_THRESHOLD) {
      // set current selected point
      if (e.geometry && e.geometry.coordinates) {
        setPoint(e.geometry.coordinates);
        setZoom(MAPBOX_SWITCH_THRESHOLD - 0.1);
      }
      onExitMode();
    }
  }

  useEffect(() => {
  }, [isBundleMode]);

  useEffect(() => {}, [mapRef]);

  useEffect(()=>{
    getPozzles(point[0], point[1], zoom);
  }, []);

  return (
    <View style={styles.container}>
      <MapboxGL.MapView
        ref={mapRef}
        rotateEnabled={false}
        style={styles.map}
        styleURL={MapboxGL.StyleURL.SatelliteStreet}
        onRegionDidChange={onRegionDidChange}
        onRegionIsChanging={onRegionIsChanging}
      >
        <MapboxGL.Camera
          animationMode="moveTo"
          centerCoordinate={point}
          zoomLevel={MAPBOX_SWITCH_THRESHOLD}
        />
        {
          pozzles.map((pozzle:pozzleModel, index)=>(
            <RenderMarker
            images={[{uri:pozzle.muxThumbnail}]}
            coordinate={pozzle.location.coordinates}
            key={index}
            index={index}
            />
          ))
        }
      </MapboxGL.MapView>
    </View>
  );
};

export default Mapbox;
