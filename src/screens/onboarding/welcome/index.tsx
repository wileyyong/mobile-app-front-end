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
import React, { useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { useDispatch, useSelector } from 'react-redux';
import { setIsNewUser } from 'src/redux/user/actions';
import { addressFromMnemonic, generateMnemonic, setItemToStorage } from '$utils';

const pozIcon = require('src/assets/images/poz.png');

function WelcomeScreen() {
  const navigation = useNavigation();
  const connector = useWalletConnect();
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createWallet = async () => {
    try {
      setIsLoading(true);

      dispatch(setIsNewUser(true));
      const mnemonic = await generateMnemonic();
      const address = await addressFromMnemonic(mnemonic);

      await setItemToStorage(
        'address',
        address
      );
      await setItemToStorage(
        'mnemonic',
        mnemonic
      );

      setIsLoading(false);
      navigation.navigate(NEW_PASSPORT_SCREEN);
    } catch (error) {
      console.log(error);
    }
  }

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
        <Button isLoading={isLoading} backgroundColor={Colors.WHITE} onPress={createWallet}>
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
