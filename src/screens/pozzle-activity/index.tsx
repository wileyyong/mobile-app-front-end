import React, { useState, useEffect } from 'react';
import {
  Camera,
  CosmicBackground,
  ImageBackground,
  Uploading,
} from '$components';

import { View, useWindowDimensions } from 'react-native';
import * as Sentry from "@sentry/react-native";
import styles from './style';
import ActivitySelection from './activity-selection';
import ActivityHeader from './activity-header';
import {
  updateActivity,
  updateModalStatus,
} from 'src/redux/progress-button/actions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemFromStorage, setItemToStorage } from '$utils';
import { ASYNC_STORAGE_LOCATION_KEY } from '$constants';
import { getLocationNameByGPS, getUserLocation } from './utils';
import { showLocationSheet } from 'src/redux/generic/actions';
import { updateUserData } from 'src/redux/user/actions';

const PozzleActivityScreen = ({ route }) => {

  const { title, _id, newActivity, location, pozzleCount, fromAddPozzle } = route.params;

  const { width } = useWindowDimensions();
  const [showSheet, setShowSheet] = useState(false);
  const [locationName, setLocationName] = useState<string | null>(null);
  const [selectedActivity, setActivity] = useState<any | null>(null);
  const redux = useSelector((state: any) => state.ProgressButtonRedux);
  const userRedux = useSelector(state => state.user);
  const dispatch = useDispatch();

  const renderHeader = () => {
    return (
      <ActivityHeader
        activityTitle={selectedActivity?.title}
        activityLocation={locationName}
        pozzlesAdded={selectedActivity?.pozzleCount}
        newActivity={selectedActivity?.newActivity}
        selectedFromList={selectedActivity?._id ? true : false}
        selected={selectedActivity?.title ? true : false}
        onPress={async () => {
              const userLocation = await getUserLocation();
              Sentry.captureMessage('userLocation '+ JSON.stringify(userLocation));
              if(!userLocation || userLocation.lat === undefined || userLocation.long === undefined ) {
                // No Location / Show Modal
                dispatch(showLocationSheet(true));
                return;
              } else {
                const _locationName = await getLocationNameByGPS(userLocation.lat , userLocation.long);
                
              Sentry.captureMessage('_locationName '+ _locationName);
                dispatch(updateUserData({...userRedux.user,
                  locationName: _locationName, 
                  location : {locationName: _locationName, coordinates : [userLocation.lat , userLocation.long]} 
                })); 
                setLocationName(_locationName);
                setItemToStorage(ASYNC_STORAGE_LOCATION_KEY,JSON.stringify({lat: userLocation.lat ,long: userLocation.long}))
              }

              setShowSheet(true);
              if (selectedActivity?._id) {
                setActivity(null);
                dispatch(updateActivity(null, false));
              }
              dispatch(updateModalStatus(true));
 
          
        }}></ActivityHeader>
    );
  };

  const renderCamera = () => {
    return <Camera />;
  };
  const renderSelection = () => {
    return (
      <ActivitySelection
        show={showSheet}
        selectedActivity={selectedActivity}
        setLocationName={setLocationName}
        onSelect={(item: any) => {
          item.locationName = userRedux.user.location.locationName;
          item.location = userRedux.user.location;
          setActivity(item);
          dispatch(updateActivity(item, true));
        }}
        onClose={(clearActivity: boolean) => {
          setShowSheet(false);
          dispatch(updateModalStatus(false));
          if (clearActivity) dispatch(updateActivity(null, false));
        }}></ActivitySelection>
    );
  };

  const renderUploading = () => {
    return (
      <Uploading
        createActivity={redux.activity?.newActivity}
        title={redux.activity?.title} />
    );
  };

  useEffect(() => {
    if (redux.activity === undefined && selectedActivity) {
      setActivity(null);
    }
    // Add Pozzle
    if (
      (redux.activity === undefined || redux.activity === null) &&
      title &&
      _id &&
      location
    ) {
      setActivity({ title, _id, newActivity, location, pozzleCount, fromAddPozzle });
      dispatch(
        updateActivity(
          { title, _id, newActivity, location, pozzleCount, fromAddPozzle },
          true,
        ),
      );
    }
  }, [redux.activity]);

  return (
    <CosmicBackground style={styles.backgroundImage}>
      <View style={[styles.container, { width }]}>
        {renderHeader()}
        {renderCamera()}
      </View>
      {renderSelection()}

      {redux.isUploading && renderUploading()}
    </CosmicBackground>
  );
};

export default PozzleActivityScreen;