import { Text, HStack, LocationIcon } from '$components';
import { Colors } from '$theme';

import React from 'react';
import { Pressable } from 'react-native';
import { PropTypes } from 'prop-types';
import { BlurView } from '@react-native-community/blur';

import styles from './style';

const LocationButton = ({ onPress }) => {
  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <BlurView blurType="light" style={styles.blurView}>
        <HStack justify="flex-start">
          <LocationIcon color={Colors.WHITE} size="small" />
          <Text color={Colors.WHITE} size="xs" weight="thin">
            Location*
          </Text>
        </HStack>
      </BlurView>
    </Pressable>
  );
};

LocationButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default LocationButton;
