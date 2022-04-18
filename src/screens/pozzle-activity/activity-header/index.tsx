import { CloseIcon, HStack, LocationPinIcon, Text, VStack } from '$components';
import { Colors, Scaling } from '$theme';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Pressable, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { translateGPStoLocation } from '../utils';

import styles from './style';
const { t } = useTranslation();

type ActivityVerbHeaderType = {
  activityTitle: string;
  activityLocation: any;
  pozzlesAdded: number;
  newActivity?: boolean;
  selected: boolean;
  selectedFromList: boolean;
  onPress: () => void;
};

const ActivityHeader = ({
  activityTitle,
  activityLocation,
  pozzlesAdded,
  newActivity,
  selected,
  selectedFromList,
  onPress,
}: ActivityVerbHeaderType) => {
  const [activityLocationTranslated, setActivityLocationTranslated] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (
      activityLocation.locationName != activityLocationTranslated &&
      activityLocation.locationName !== ''
    ) {
      setActivityLocationTranslated(activityLocation.locationName);
    }
  }, [activityLocation]);
  return (
    <>
      <Pressable onPress={onPress}>
        <View style={styles.headerContainer}>
          {selected ? (
            <VStack
              justify="center"
              align="flex-start"
              style={{
                paddingTop: Scaling.scale(5),
                paddingHorizontal: Scaling.scale(20),
              }}>
              <Text
                size="sm"
                color={selected ? Colors.WHITE : Colors.FIFTYPERCENTWHITE}
                style={styles.headerText}
                weight="semibold">
                {activityTitle}
              </Text>
              <HStack justify="flex-start" align="flex-start">
                {newActivity ? (
                  <Text size="xs" color={Colors.FIFTYPERCENTWHITE}>
                    {t('pozzleActivityScreen.activityHeader.createNewActivity')}
                  </Text>
                ) : selectedFromList ? (
                  <Text size="xs" color={Colors.FIFTYPERCENTWHITE}>
                    {pozzlesAdded +
                      ' ' +
                      t('pozzleActivityScreen.pozzlesAdded')}
                  </Text>
                ) : (
                  <></>
                )}
                <LocationPinIcon
                  width={20}
                  height={28}
                  style={styles.icon}
                  size="medium"
                  color={Colors.FIFTYPERCENTWHITE}></LocationPinIcon>
                <Text
                  size="xs"
                  color={Colors.FIFTYPERCENTWHITE}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.location}>
                  {activityLocationTranslated}
                </Text>
              </HStack>
            </VStack>
          ) : (
            <VStack justify="center" align="flex-start">
              <Text
                color={Colors.FIFTYPERCENTWHITE}
                style={styles.emptyHeaderText}
                weight="semibold">
                {activityTitle}
              </Text>
            </VStack>
          )}
        </View>
      </Pressable>
    </>
  );
};

ActivityHeader.defaultProps = {
  onPress: () => {},
  activityTitle: t('pozzleActivityScreen.activityHeader.activityTitle'),
  activityLocation: {
    locationName: '',
    coordinates: ['-0.118092', '51.509865'],
  },
  newActivity: false,
  selected: false,
  selectedFromList: false,
};

ActivityHeader.propTypes = {
  onPress: PropTypes.func,
  activityTitle: PropTypes.string,
  activityLocation: PropTypes.object,
  newActivity: PropTypes.bool,
  selected: PropTypes.bool,
  selectedFromList: PropTypes.bool,
};

export default ActivityHeader;
