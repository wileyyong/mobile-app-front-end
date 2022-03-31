import {
  EXPLORER_TAB_SCREEN,
  PASSPORT_TAB_SCREEN,
  POZZLE_ACTIVITY_TAB_SCREEN,
} from '$constants';
import { Button, Text, PozzleCameraButtons } from '$components';

import React, { useState, useEffect } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { updateRecordingAndFile } from '../../../../redux/progress-button/actions';
import { BlurView } from '@react-native-community/blur';

interface ITab {
  descriptors: object;
  index: number;
  navigate: (route, index: number) => void;
  route?: { [x: string]: string };
  state: { [x: string]: any };
  styles: object;
}

const Tab = ({ route, index, state, descriptors, navigate, styles }: ITab) => {
  const { width: screenWidth } = useWindowDimensions();
  const { options } = descriptors[route.key];
  const dispatch = useDispatch();

  const progressButtonRedux = useSelector(state => state.ProgressButtonRedux);
  const [, setIsRecording] = useState<boolean | undefined>(undefined);
  const [hasActivity, setHasActivity] = useState<boolean | undefined>(
    undefined,
  );
  const [file, setFile] = useState(undefined);

  const startRecording = async () => {
    setIsRecording(true);
    dispatch(updateRecordingAndFile(true, undefined));
  };

  const stopRecording = () => {
    setIsRecording(false);
    dispatch(updateRecordingAndFile(false, file));
  };

  const renderCameraButtons = () => {
    return (
      <>
        <PozzleCameraButtons
          hasActivity={hasActivity}
          file={file}
          startRecording={startRecording}
          stopRecording={stopRecording}
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
    if (progressButtonRedux.file) {
      setFile(progressButtonRedux.file);
    }

    if (
      progressButtonRedux.file === undefined ||
      progressButtonRedux.file === false
    ) {
      setFile(undefined);
    }

    if (progressButtonRedux.hasActivity) {
      setHasActivity(true);
    }
    if (
      progressButtonRedux.hasActivity === undefined ||
      progressButtonRedux.hasActivity === false
    ) {
      setHasActivity(false);
    }
  }, [progressButtonRedux.file, progressButtonRedux.hasActivity]);

  if (route.name === POZZLE_ACTIVITY_TAB_SCREEN) {
    return (
      <View
        key={label}
        style={[
          styles.tabContainer,
          { width: state.index === 1 ? screenWidth + 30 : screenWidth - 30 },
        ]}>
        {renderCameraButtons()}
      </View>
    );
  }
  if (route.name === EXPLORER_TAB_SCREEN)
    return (
      <View
        key={label}
        style={[styles.tabContainer, { width: screenWidth - 60 }]}>
        <Button style={styles.tab} onPress={() => navigate(route, index)}>
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
