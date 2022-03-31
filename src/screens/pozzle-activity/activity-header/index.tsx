import { CloseIcon, HStack, LocationPinIcon, Text } from '$components';
import { Colors } from '$theme';
import React from 'react';
import PropTypes from 'prop-types';
import { Pressable, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { translateGPStoLocation } from '../utils';

import styles from './style';
const { t } = useTranslation();

type ActivityVerbHeaderType = {
  activityTitle: string;
  activityLocation: {};
  pozzlesAdded: number;
  newActivity?: boolean;
  selected: boolean;
  onPress: () => void;
  onPressClose: () => void;
};

const ActivityHeader = ({
  activityTitle,
  activityLocation,
  pozzlesAdded,
  newActivity,
  selected,
  onPress,
  onPressClose,
}: ActivityVerbHeaderType) => {
  return (
    <>
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
                  {t('pozzleActivityScreen.activityHeader.createNewActivity')}
                </Text>
              ) : selected ? (
                <Text size="xs" color={Colors.THIRTYPERCENTBLACK}>
                  {pozzlesAdded + ' ' + t('pozzleActivityScreen.pozzlesAdded')}
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
                {translateGPStoLocation(activityLocation)}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
      {selected ? (
        <TouchableOpacity style={styles.closeIcon} onPress={onPressClose}>
          <CloseIcon color={Colors.WHITE} size="medium" />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </>
  );
};

ActivityHeader.defaultProps = {
  onPressClose: () => {},
  onPress: () => {},
  activityTitle: t('pozzleActivityScreen.activityHeader.activityTitle'),
  activityLocation: { coordinates: ['Melbourne', 'Australia'] },
  newActivity: false,
  selected: false,
};

ActivityHeader.propTypes = {
  onPressClose: PropTypes.func,
  onPress: PropTypes.func,
  activityTitle: PropTypes.string,
  activityLocation: PropTypes.object,
  newActivity: PropTypes.bool,
  selected: PropTypes.bool,
};

export default ActivityHeader;
