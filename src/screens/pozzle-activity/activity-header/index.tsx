import { LocationPinIcon, Text } from '$components';
import { Colors } from '$theme';
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Pressable, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './style';
const { t } = useTranslation();

type ActivityVerbHeaderType = {
  activityTitle: string;
  activityLocation: string;
  newActivity: boolean;
  selected: boolean;
  onPress: () => void;
};

const ActivityHeader = ({
  activityTitle,
  activityLocation,
  newActivity,
  selected,
  onPress,
}: ActivityVerbHeaderType) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }}>
          <Text
            size="sm"
            color={selected ? Colors.WHITE : Colors.THIRTYPERCENTBLACK}
            style={styles.headerText}
            weight="semibold">
            {activityTitle}
          </Text>
          <View style={styles.bodyTextContainer}>
            {newActivity ? (
              <Text size="xs" color={Colors.THIRTYPERCENTBLACK}>
                {'Creating New Activity'}
              </Text>
            ) : (
              <></>
            )}
            <LocationPinIcon
              width={20}
              height={28}
              style={styles.icon}
              size="large"
              color={Colors.THIRTYPERCENTBLACK}></LocationPinIcon>
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
  activityTitle: t('activityScreen.activityHeader.activityTitle'),
  activityLocation: 'Melbourne, Australia',
  newActivity: false,
  selected: false,
};

ActivityHeader.propTypes = {
  onPress: PropTypes.func,
  activityTitle: PropTypes.string,
  activityLocation: PropTypes.string,
  newActivity: PropTypes.boolean,
  selected: PropTypes.boolean,
};

export default ActivityHeader;
