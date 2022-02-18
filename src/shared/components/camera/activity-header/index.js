import { LocationPinIcon, Text } from '$components';
import { Colors } from '$theme';
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Pressable, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './style';

const downArrow = require('$assets/downArrow.png');
const { t } = useTranslation();

const ActivityHeader = ({ onPress, activityTitle, activityLocation }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }}>
          <Text size="sm" color={Colors.THIRTYPERCENTBLACK} style={styles.headerText} weight="bold">
            {activityTitle}
          </Text>
          <View style={styles.bodyTextContainer}>
            <LocationPinIcon
              style={styles.icon}
              size="large"
              color={Colors.THIRTYPERCENTBLACK}
            ></LocationPinIcon>
            <Text size="xs" color={Colors.THIRTYPERCENTBLACK}>
              {activityLocation}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

ActivityHeader.defaultProps = {
  onPress: () => {},
  activityTitle: t('activityHeader.activityTitle'),
  activityLocation: 'Melbourne, Australia',
};

ActivityHeader.propTypes = {
  onPress: PropTypes.func,
  activityTitle: PropTypes.string,
  activityLocation: PropTypes.string,
};

export default ActivityHeader;
