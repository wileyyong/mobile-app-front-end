import {
  NEW_PASSPORT_SCREEN
} from '$constants';
import {
  Button,
  CosmicBackground,
  Orbs,
  Spacer,
  Text,
  VStack,
} from '$components';
import { Colors } from '$theme';
import React, { useCallback } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

const pozIcon = require('src/assets/images/poz.png');

function WelcomeScreen() {
  const navigation = useNavigation();
  const connector = useWalletConnect();
  const connectWallet = useCallback(async () => {
    await connector.connect();
    navigation.navigate(NEW_PASSPORT_SCREEN);
  }, [connector]);
  const killSession = useCallback(() => {
    return connector.killSession();
  }, [connector]);

  return (
    <CosmicBackground
      style={{
        justifyContent: 'center',
      }}>
      <Orbs />
      <VStack style={styles.content}>
        <Spacer height={100} />
        <Image source={pozIcon} />
        <Spacer height={250} />
        <Button isLoading={false} backgroundColor={Colors.LIGHT_PURPLE} onPress={() => { }}>
          <Text
            color={Colors.WHITE}
            translationKey="onBoardingScreen.newUserButtonText"
            weight="bold"
          />
        </Button>
        <Spacer height={20} />
        {!connector.connected && (
          <Button
            isLoading={false}
            backgroundColor={Colors.WHITE}
            onPress={connectWallet}
          >
            <Text
              weight="bold"
              translationKey='onBoardingScreen.prevUserButtonText'
            />
          </Button>
        )}
        {!!connector.connected && (
          <Button
            isLoading={false}
            backgroundColor={Colors.WHITE}
            onPress={killSession}
          >
            <Text
              weight="bold"
            >
              Logout
            </Text>
          </Button>
        )}
        <Spacer height={70} />
      </VStack>
    </CosmicBackground >
  );
}

export default WelcomeScreen;
