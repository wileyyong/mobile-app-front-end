import React, { useState, useEffect } from 'react';
import { Camera, ImageBackground, Uploading } from '$components';

import { View, useWindowDimensions } from 'react-native';

import styles from './style';
import ActivitySelection from './activity-selection';
import ActivityHeader from './activity-header';
import {
  updateActivity,
  updateModalStatus,
} from 'src/redux/progress-button/actions';
import { useDispatch, useSelector } from 'react-redux';

const radialGradient = require('src/assets/images/radialGradientBackground.png');

const PozzleActivityScreen = () => {
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
        selected={selectedActivity?.title ? true : false}
        onPress={() => {
          if (selectedActivity?.title) return;
          setShowSheet(true);
          dispatch(updateActivity(null, false));
          dispatch(updateModalStatus(true));
        }}
        onPressClose={() => {
          setActivity(null);
          dispatch(updateActivity(null, false));
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
        }}
        onClose={() => {
          setShowSheet(false);
          dispatch(updateModalStatus(false));
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
    if (selectedActivity?.title) {
      dispatch(updateActivity(selectedActivity, true));
    }
  }, [selectedActivity, redux.isUploading]);

  return (
    <>
      <View style={[styles.container, { width }]}>
        <ImageBackground source={radialGradient} style={styles.backgroundImage}>
          {renderHeader()}
          {renderCamera()}
        </ImageBackground>
      </View>
      {renderSelection()}

      {redux.isUploading ? renderUploading() : <></>}
    </>
  );
};

export default PozzleActivityScreen;
