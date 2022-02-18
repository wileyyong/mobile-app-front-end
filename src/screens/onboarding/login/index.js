import { NEW_PASSPORT_SCREEN } from '$constants';
import { Button, CosmicBackground, Orbs, Spacer, Text, VStack, BlurView } from '$components';
import { Colors } from '$theme';

import React from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

import Style from './style';

const LoginScreen = () => {
  const navigation = useNavigation();
  const platformBlurType = Platform.select({ android: 'dark', ios: 'ultraThinMaterialDark' });
  const connector = useWalletConnect();

  const onConnect = async () => {
    await connector.connect();
    navigation.navigate(NEW_PASSPORT_SCREEN);
  };

  return (
    <CosmicBackground>
      <Orbs />
      <BlurView blurAmount={50} blurType={platformBlurType} style={Style.blurContainer}>
        <VStack align="flex-start" justify="flex-start">
          <Text color={Colors.WHITE} size="lg" weight="bold">
            Login with Crypto Wallet
          </Text>
          <Spacer height={10} />
          <Text color={Colors.WHITE} size="xs">
            If you already have an Ethereum wallet, you can connect it to Pozzle Planet.
          </Text>
          <Spacer height={30} />
          {!connector.connected && (
            <Button backgroundColor={Colors.LIGHT_PURPLE} onPress={onConnect}>
              <Text color={Colors.WHITE} weight="bold">
                Connect a Wallet
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
