import { LocationPinIcon, OptionsIcon, SettingsIcon, Text } from '$components';

import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './style';
import { pozzlePilot } from './utils';
import { HStack, VStack } from '../../stacks';
import { Colors } from '$theme';

type AboutPozzleType = {
  addedBy: string;
  inspiredBy: string;
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
          <VStack>
            <HStack>
              <Text size="xxs" style={styles.headerText} weight="bold">
                {addedBy}
              </Text>
              <Text size="xxs" style={styles.headerText} weight="regular">
                {t('aboutPozzle.inspiredBy')} {inspiredBy}
              </Text>
            </HStack>
            <HStack>
              <LocationPinIcon
                width={20}
                height={20}
                size="medium"
                color={Colors.GRAY3}
                style={{}}></LocationPinIcon>
              <Text size="xxs" style={styles.headerText} weight="regular">
                {t('aboutPozzle.joinedIn')} {locationJoined}
              </Text>
            </HStack>
          </VStack>
        </HStack>
        <OptionsIcon size="xlarge" style={styles.optionsIcon} />
      </View>
    </View>
  );
};

export default AboutPozzle;
