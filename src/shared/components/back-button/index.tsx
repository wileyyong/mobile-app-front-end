import React from 'react';
import {
  View,
  Platform,
  TouchableNativeFeedback,
  TouchableHighlight,
} from 'react-native';

// import { PlanetIcon } from '$components';
import { PlanetIcon } from '$components';

import styles from './style';

interface IBackButton {
  onPress: () => void;
  backgroundColor: string;
}

const BackButton = ({ onPress, backgroundColor }: IBackButton) => {
  const makeTouchable = (TouchableComponent?) => {
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
    <View style={styles.outerStyle}>
      <Touchable {...defaultTouchableProps} onPress={onPress}>
        <View style={styles.outlinedContainer}>
          <PlanetIcon />
        </View>
      </Touchable>
    </View>
  );
};

export default BackButton;
