import {
  EXPLORER_TAB_SCREEN,
  PASSPORT_TAB_SCREEN,
  POZZLE_ACTIVITY_TAB_SCREEN,
  POZZLE_VIDEO_TAB_SCREEN,
} from '$constants';
import { Colors } from '$theme';
import { Button, Text, ProgressButton } from '$components';

import React from 'react';
import { useWindowDimensions, View } from 'react-native';

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
  const label =
    // eslint-disable-next-line no-nested-ternary
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;
  if (route.name === POZZLE_VIDEO_TAB_SCREEN)
    return (
      <View
        key={label}
        style={[
          styles.tabContainer,
          { width: state.index === 1 ? screenWidth + 20 : screenWidth - 20 },
        ]}></View>
    );

  if (route.name === POZZLE_ACTIVITY_TAB_SCREEN) {
    return (
      <View
        key={label}
        style={[styles.tabContainer, { width: screenWidth - 40 }]}>
        <ProgressButton
          backgroundColor={Colors.WHITE}
          overlayColor={Colors.PINK}
          overlayDirection="RTL"
          text="Record"
        />
      </View>
    );
  }
  if (route.name === EXPLORER_TAB_SCREEN)
    return (
      <View
        key={label}
        style={[styles.tabContainer, { width: screenWidth - 40 }]}>
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
          { width: state.index === 2 ? screenWidth - 20 : screenWidth },
        ]}>
        <Button style={styles.tab} onPress={() => navigate(route, index)}>
          <Text style={styles.text}>{label}</Text>
        </Button>
      </View>
    );

  return null;
};

export default Tab;
