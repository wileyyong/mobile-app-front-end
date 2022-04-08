import { NEW_PASSPORT_SCREEN, ONBOARDING_LOADING_SCREEN } from '$constants';
import {
  Button,
  CosmicBackground,
  Orbs,
  Spacer,
  Text,
  VStack,
  BlurView,
  Input,
} from '$components';
import { Colors } from '$theme';

import React, { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { useTranslation } from 'react-i18next';

import Style from './style';

const LoginScreen = () => {
  const navigation = useNavigation();

  const { t } = useTranslation();
  const toLoadingScreen = () => navigation.navigate(ONBOARDING_LOADING_SCREEN);
  const platformBlurType = Platform.select({
    android: 'dark',
    ios: 'ultraThinMaterialDark',
  });

  const connector = useWalletConnect();

  useEffect(() => {
    if (connector.connected) {
      navigation.navigate(NEW_PASSPORT_SCREEN);
    }
  }, []);

  return (
    <CosmicBackground
      style={{
        justifyContent: 'center',
      }}>
      <Orbs />
      <BlurView
        blurAmount={50}
        blurType={platformBlurType}
        style={Style.blurContainer}>
        <VStack
          align="flex-start"
          justify="flex-start"
          style={{ width: '100%' }}>
          <Text color={Colors.WHITE} size="lg" weight="bold">
            {t('onBoardingScreen.prevUserButtonText')}
          </Text>
          <Spacer height={10} />
          <Text color={Colors.WHITE} size="xs">
            {t('onBoardingScreen.possessWalletText')}
          </Text>
          <Spacer height={30} />
          {!connector.connected && (
            <Button
              backgroundColor={Colors.LIGHT_PURPLE}
              onPress={() => {
                try {
                  connector.connect().then(toLoadingScreen);
                } catch (error) {
                  console.log(error);
                }
              }}>
              <Text color={Colors.WHITE} weight="bold">
                {t('onBoardingScreen.connectWalletText')}
              </Text>
            </Button>
          )}
          <Spacer height={20} />
        </VStack>
      </BlurView>
    </CosmicBackground>
  );
};

export default LoginScreen;
