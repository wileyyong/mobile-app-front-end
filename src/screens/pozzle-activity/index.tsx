import React, { useState, useEffect } from 'react';
import {
  Camera,
  CosmicBackground,
  ImageBackground,
  Uploading,
} from '$components';

import { View, useWindowDimensions } from 'react-native';

import styles from './style';
import ActivitySelection from './activity-selection';
import ActivityHeader from './activity-header';
import {
  updateActivity,
  updateModalStatus,
} from 'src/redux/progress-button/actions';
import { useDispatch, useSelector } from 'react-redux';

const PozzleActivityScreen = ({ route }) => {
  const { title, _id, newActivity, location, pozzleCount } = route.params;
  console.log('PozzleActivityScreen', route);
  const { width } = useWindowDimensions();
  const [showSheet, setShowSheet] = useState(false);
  const [locationName, setLocationName] = useState<string | null>(null);
  const [selectedActivity, setActivity] = useState<any | null>(null);
  const redux = useSelector((state: any) => state.ProgressButtonRedux);
  const dispatch = useDispatch();

  const renderHeader = () => {
    return (
      <ActivityHeader
        activityTitle={selectedActivity?.title}
        activityLocation={selectedActivity?.location}
        pozzlesAdded={selectedActivity?.pozzleCount}
        newActivity={selectedActivity?.newActivity}
        selectedFromList={selectedActivity?._id ? true : false}
        selected={selectedActivity?.title ? true : false}
        onPress={() => {
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
        firstTime={true}
        title={redux.activity?.title}
        total={2}></Uploading>
    );
  };

  useEffect(() => {
    if (redux.activity === undefined && selectedActivity) {
      setActivity(null);
    }
    // Add Pozzle
    console.log('title && _id && location', title, _id, location);
    if (redux.activity === undefined && title && _id && location) {
      setActivity({ title, _id, newActivity, location, pozzleCount });
      dispatch(
        updateActivity(
          { title, _id, newActivity, location, pozzleCount },
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
