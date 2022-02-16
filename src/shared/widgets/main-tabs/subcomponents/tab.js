import { EXPLORER_TAB_SCREEN, PASSPORT_TAB_SCREEN, POZZLE_ACTIVITY_TAB_SCREEN } from '$constants';
import { Colors } from '$theme';
import { Button, Text, ProgressButton } from '$components';

import PropTypes from 'prop-types';
import React from 'react';
import { useWindowDimensions, View } from 'react-native';

const Tab = ({ route, index, state, descriptors, navigate, styles }) => {
  const { width: screenWidth } = useWindowDimensions();
  const { options } = descriptors[route.key];
  const label =
    // eslint-disable-next-line no-nested-ternary
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

  if (route.name === POZZLE_ACTIVITY_TAB_SCREEN)
    return (
      <View
        key={label}
        style={[
          styles.tabContainer,
          { width: state.index === 1 ? screenWidth + 30 : screenWidth - 30 },
        ]}
      >
        <ProgressButton
          style={styles.tab}
          backgroundColor={Colors.WHITE}
          overlayColor={Colors.PINK}
          overlayDirection="RTL"
          text="Record"
          // onFinish={stopRecording}
          //  onStart={startRecording}
        />
      </View>
    );

  if (route.name === EXPLORER_TAB_SCREEN)
    return (
      <View key={label} style={[styles.tabContainer, { width: screenWidth - 60 }]}>
        <Button style={styles.tab} onPress={() => navigate(route, index)}>
          <Text style={styles.text}>{label}</Text>
        </Button>
      </View>
    );

  if (route.name === PASSPORT_TAB_SCREEN)
    return (
      <View
        key={label}
        style={[styles.tabContainer, { width: state.index === 2 ? screenWidth - 30 : screenWidth }]}
      >
        <Button style={styles.tab} onPress={() => navigate(route, index)}>
          <Text style={styles.text}>{label}</Text>
        </Button>
      </View>
    );

  return null;
};

Tab.propTypes = {
  descriptors: PropTypes.objectOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
  route: PropTypes.objectOf(PropTypes.object).isRequired,
  state: PropTypes.objectOf(PropTypes.object).isRequired,
  styles: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Tab;
