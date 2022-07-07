import { COMPLETED_ONBOARDING } from '$constants';
import {
  ArrowLeft,
  Button,
  SkyBackground,
  Spacer,
  Text,
  VStack,
} from '$components';
import { Colors } from '$theme';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import { getLocation } from '$utils';
import { useTranslation } from 'react-i18next';

const locationIcon = require('src/assets/images/Location.png');

function LocationScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const goBack = () => {
    navigation.goBack();
  };

  const handleSubmit = async () => {
    getLocation();
    navigation.navigate(COMPLETED_ONBOARDING);
  };

  return (
    <SkyBackground style={styles.container}>
      <TouchableOpacity style={styles.arrowLeft} onPress={() => goBack()}>
        <ArrowLeft color={Colors.WHITE} />
      </TouchableOpacity>
      <VStack style={styles.content}>
        <Spacer height={200} />
        <Image source={locationIcon} />
        <Spacer height={20} />
        <Text style={styles.title} size="lg" color={Colors.WHITE}>
          {t('onBoardingScreen.location.title')}
        </Text>
        <Spacer height={20} />
        <Text
          style={{
            fontWeight: 'bold',
          }}
          size="sm"
          color={Colors.GRAY2}>
          {t('onBoardingScreen.location.description')}
        </Text>
        <Spacer height={170} />
        <Button onPress={handleSubmit} backgroundColor={Colors.LIGHT_PURPLE}>
          <Text
            color={Colors.WHITE}
            weight="bold"
            translationKey="onBoardingScreen.location.on"
          />
        </Button>
        <Spacer height={20} />
        <Text
          style={{
            fontWeight: 'bold',
          }}
          size="sm"
          color={Colors.GRAY2}>
          {t('onBoardingScreen.skip')}
        </Text>
        <Spacer height={70} />
      </VStack>
    </SkyBackground>
  );
}

export default LocationScreen;
