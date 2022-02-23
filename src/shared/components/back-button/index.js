import React from 'react';
import { View, Platform, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import { PlanetIcon } from '../icons';

import styles from './style';

const BackButton = ({ onPress }) => {
  const makeTouchable = (TouchableComponent) => {
    const Touchable =
      TouchableComponent ||
      Platform.select({
        android: TouchableNativeFeedback,
        default: TouchableHighlight,
        ios: TouchableHighlight,
      });
    let defaultTouchableProps = {};

    if (Touchable === TouchableHighlight) {
      defaultTouchableProps = { underlayColor: 'rgba(0, 0, 0, 0.1)' };
    }

    return { Touchable, defaultTouchableProps };
  };

  const { Touchable, defaultTouchableProps } = makeTouchable();

  return (
    <Touchable {...defaultTouchableProps} onPress={onPress}>
      <View style={styles.outlinedContainer}>
        <PlanetIcon />
      </View>
    </Touchable>
  );
};

BackButton.defaultProps = {
  onPress: () => {},
};

BackButton.propTypes = {
  onPress: PropTypes.func,
};

export default BackButton;
