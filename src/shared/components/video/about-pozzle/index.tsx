import { LocationPinIcon, OptionsIcon, SettingsIcon, Text } from '$components';

import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './style';
import { pozzlePilot } from './utils';
import { HStack, VStack } from '../../stacks';
import { Colors, Scaling } from '$theme';

type AboutPozzleType = {
  addedBy: string;
  inspiredBy?: string;
  locationJoined: string;
};
const AboutPozzle = ({
  addedBy,
  inspiredBy,
  locationJoined,
}: AboutPozzleType) => {
  const { t } = useTranslation();

  return (
    <View style={styles.aboutContainer}>
      <View style={styles.addedByContainer}>
        <HStack>
          <Image source={pozzlePilot} style={styles.addedByImage} />
          <VStack justify="space-evenly" style={styles.vStackContainer}>
            <HStack>
              <Text size="xxs" style={styles.headerText} weight="bold">
                {addedBy}
              </Text>
              {inspiredBy && (
                <Text
                  size="xxs"
                  style={[styles.headerText, styles.inpiredBy]}
                  weight="regular">
                  {t('aboutPozzle.inspiredBy')} {inspiredBy}
                </Text>
              )}
            </HStack>
            <HStack
              justify="flex-start"
              align="flex-start"
              style={styles.hStackContainer}>
              <LocationPinIcon
                width={15}
                height={15}
                size="medium"
                color={Colors.GRAY3}
                style={{}}></LocationPinIcon>
              <Text size="xxs" style={styles.headerText} weight="regular">
                {t('aboutPozzle.joinedIn')} {locationJoined}
              </Text>
            </HStack>
          </VStack>
        </HStack>
        <TouchableOpacity
          onPress={() => {
            console.log('options');
          }}>
          <OptionsIcon size="xlarge" style={styles.optionsIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AboutPozzle;
