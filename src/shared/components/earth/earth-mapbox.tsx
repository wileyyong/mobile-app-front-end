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
  const [pozzles, setPozzles] = useState<pozzleModel[]>([]);
  const [filteredMarkers, setFilteredMarkers] = useState<IRenderMarkerType[]>([],
  );
  const [isBundleMode, setIsBundleMode] = useState(true);
  const [coordinates, setCoordinates] = useState(point);

  const filterPozzles = (newPozzles:pozzleModel[]) => {
    let tempPozzles = pozzles;
    // add new
    newPozzles.forEach(pozzle=>{
      if(!tempPozzles.find(tPozzle=>tPozzle._id === pozzle._id)){
        tempPozzles.push(pozzle);
      }
    });
    //delete non existing
    tempPozzles.forEach((tPozzle, index)=>{
      if(!newPozzles.find(nPozzle=>nPozzle._id === tPozzle._id)){
        tempPozzles.splice(index, 1);
      }
    })
    setPozzles(tempPozzles);
  }

  const getPozzles = (long: number, lat: number, zoom: number) => {
    Pozzles.get({long: long, lat: lat, zoom: zoom }).then(response => {
      filterPozzles(response.data || []);
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
      setCoordinates(e.geometry.coordinates);
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
        setZoom(MAPBOX_SWITCH_THRESHOLD - 0.3);
      }
      onExitMode();
    }
  }

  useEffect(() => {
  }, [isBundleMode]);

  useEffect(() => {}, [mapRef]);

  useEffect(()=> {
  }, [pozzles]);

  useEffect(()=>{
    getPozzles(coordinates[0], coordinates[1], zoom);
  }, [coordinates]);

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
