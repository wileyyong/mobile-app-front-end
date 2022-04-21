import {
  EXPLORER_TAB_SCREEN,
  PASSPORT_TAB_SCREEN,
  POZZLE_ACTIVITY_TAB_SCREEN,
} from '$constants';
import { Button, Text, PozzleCameraButtons } from '$components';

import React, { useState, useEffect } from 'react';
import { Alert, useWindowDimensions, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { updateRecordingAndFile } from '../../../../redux/progress-button/actions';

interface ITab {
  descriptors: object;
  index: number;
  navigate: (route: any, index: number) => void;
  route?: { [x: string]: string };
  state: { [x: string]: any };
  styles: object;
}

const Tab = ({ route, index, state, descriptors, navigate, styles }: ITab) => {
  const { width: screenWidth } = useWindowDimensions();
  const { options } = descriptors[route.key];
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const redux = useSelector(state => state.ProgressButtonRedux);
  const [, setIsRecording] = useState(false);
  const [hasActivity, setHasActivity] = useState(false);
  const [file, setFile] = useState<string>();

  const startRecording = async () => {
    setIsRecording(true);
    dispatch(updateRecordingAndFile(true, undefined));
  };

  const stopRecording = () => {
    setIsRecording(false);
    dispatch(updateRecordingAndFile(false, file));
  };

  const cancelRecording = () => {
    setFile(undefined);
    setTimeout(() => {
      dispatch(updateRecordingAndFile(false, false));
    }, 500);
  };

  const renderCameraButtons = () => {
    return (
      <>
        <PozzleCameraButtons
          hasActivity={hasActivity}
          file={file}
          startRecording={startRecording}
          stopRecording={stopRecording}
          cancelRecording={cancelRecording}
          setFile={setFile}
        />
      </>
    );
  };

  const label =
    // eslint-disable-next-line no-nested-ternary
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

  useEffect(() => {
    if (redux.file) {
      setFile(redux.file);
    }

    if (redux.file === undefined || redux.file === false) {
      setFile(undefined);
    }

    if (redux.hasActivity) {
      setHasActivity(true);
    }
    if (redux.hasActivity === false && redux.hasActivity != hasActivity) {
      setHasActivity(false);
    }
  }, [redux.file, redux.hasActivity]);

  if (route.name === POZZLE_ACTIVITY_TAB_SCREEN) {
    return (
      <View
        key={label}
        style={[
          styles.tabContainer,
          { width: state.index === 1 ? screenWidth + 30 : screenWidth - 20 },
        ]}>
        {!redux.hasModalOpen ? renderCameraButtons() : <></>}
      </View>
    );
  }
  if (route.name === EXPLORER_TAB_SCREEN)
    return (
      <View
        key={label}
        style={[styles.tabContainer, { width: screenWidth - 60 }]}>
        <Button
          style={styles.tab}
          onPress={() => navigation.navigate('Discovery')}>
          <Text style={styles.text}>{label}</Text>
        </Button>
      </View>
    );

  if (route.name === PASSPORT_TAB_SCREEN)
    return (
      <View
        key={label}
        style={[
          styles.tabContainer,
          { width: state.index === 2 ? screenWidth - 30 : screenWidth },
        ]}>
        <Button style={styles.tab} onPress={() => navigate(route, index)}>
          <Text style={styles.text}>{label}</Text>
        </Button>
      </View>
    );

  return null;
};

export default Tab;
