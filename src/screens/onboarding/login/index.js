import { NEW_PASSPORT_SCREEN } from '$constants';
import { Button, CosmicBackground, Orbs, Spacer, Text, VStack, BlurView } from '$components';
import { Colors } from '$theme';

import React from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { useTranslation } from 'react-i18next';

import Style from './style';

const LoginScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const toPassportScreen = () => navigation.navigate(NEW_PASSPORT_SCREEN);
  const platformBlurType = Platform.select({ android: 'dark', ios: 'ultraThinMaterialDark' });

  const connector = useWalletConnect();

  return (
    <CosmicBackground>
      <Orbs />
      <BlurView blurAmount={50} blurType={platformBlurType} style={Style.blurContainer}>
        <VStack align="flex-start" justify="flex-start">
          <Text color={Colors.WHITE} size="lg" weight="bold">
            {t('onBoardingScreen.prevUserButtonText')}
          </Text>
          <Spacer height={10} />
          <Text color={Colors.WHITE} size="xs">
            {t('onBoardingScreen.possessWalletText')}
          </Text>
          <Spacer height={30} />
          {!connector.connected ? (
            <Button
              backgroundColor={Colors.LIGHT_PURPLE}
              onPress={() => connector.connect().then(toPassportScreen)}
            >
              <Text color={Colors.WHITE} weight="bold">
                {t('onBoardingScreen.connectWalletText')}
              </Text>
            </Button>
          ) : null}
          <Spacer height={20} />
        </VStack>
      </BlurView>
    </CosmicBackground>
  );
};

export default LoginScreen;
