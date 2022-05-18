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
import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

const pozIcon = require('src/assets/images/poz.png');

function WelcomeScreen() {
  const navigation = useNavigation();
  const connector = useWalletConnect();
  const connectWallet = async () => {
    await connector.connect();
    navigation.navigate(NEW_PASSPORT_SCREEN);
  };

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
        <Button isLoading={false} backgroundColor={Colors.WHITE} onPress={() => { }}>
          <Text
            color={Colors.BLACK}
            translationKey="onBoardingScreen.newUserButtonText"
            weight="bold"
          />
        </Button>
        <Spacer height={20} />
        <Button
          isLoading={false}
          backgroundColor={Colors.LIGHT_PURPLE}
          onPress={connectWallet}
        >
          <Text
            color={Colors.WHITE}
            weight="bold"
            translationKey='onBoardingScreen.prevUserButtonText'
          />
        </Button>
        <Spacer height={70} />
      </VStack>
    </CosmicBackground >
  );
}

export default WelcomeScreen;
