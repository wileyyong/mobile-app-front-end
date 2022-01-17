/* eslint-disable no-console */
import { Text, HStack, PhotosIcon } from '$components';
import { Colors } from '$theme';

import React from 'react';
import { Pressable } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { BlurView } from '@react-native-community/blur';
import { PropTypes } from 'prop-types';

import styles from './style';

const ProfilePhotoButton = ({ onSelect }) => {
  return (
    <Pressable
      style={styles.pressable}
      onPress={async () => {
        try {
          const result = await launchImageLibrary();

          onSelect(result.assets[0].uri);
        } catch (error) {
          console.log('No selection made');
        }
      }}
    >
      <BlurView blurType="light" style={styles.blurView}>
        <HStack justify="flex-start">
          <PhotosIcon color={Colors.WHITE} size="medium" style={styles.icon} />
          <Text color={Colors.WHITE} size="xs" weight="thin">
            Profile Photo
          </Text>
        </HStack>
      </BlurView>
    </Pressable>
  );
};

ProfilePhotoButton.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default ProfilePhotoButton;