import { Text, HStack, LocationIcon, BlurView } from '$components';
import { Colors } from '$theme';

import React from 'react';
import { Pressable } from 'react-native';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './style';

const LocationButton = ({ onPress }) => {
  const { t } = useTranslation();

  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <BlurView blurType="light" style={styles.blurView}>
        <HStack justify="flex-start">
          <LocationIcon color={Colors.WHITE} size="small" />
          <Text color={Colors.WHITE} size="xs" weight="thin">
            {`${t('passportScreen.formfield.location')}*`}
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
