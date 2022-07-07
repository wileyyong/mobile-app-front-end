import { NAME_SCREEN, SIGN_MESSAGE } from '$constants';
import {
  Button,
  SkyBackground,
  Spacer,
  Text,
  VStack,
  HexagonBackground,
  NewWalletConfirmation,
  SuccessWalletSheet,
  WalletConnectIcon,
} from '$components';
import { Colors } from '$theme';
import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { useDispatch } from 'react-redux';
import { setIsNewUser } from 'src/redux/user/actions';
import {
  addressFromMnemonic,
  generateMnemonic,
  setItemToStorage,
} from '$utils';
import LargeIcon from 'src/assets/images/LargeLogo.svg';

function WelcomeScreen() {
  const navigation = useNavigation();
  const connector = useWalletConnect();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showWalletSheet, setShowWalletSheet] = useState<boolean>(false);
  const [showSuccessWalletSheet, setShowSuccessWalletSheet] =
    useState<boolean>(false);

  const createWallet = async () => {
    try {
      setIsLoading(true);

      dispatch(setIsNewUser(true));
      const mnemonic = await generateMnemonic();
      const address = await addressFromMnemonic(mnemonic);

      await setItemToStorage('address', address);
      await setItemToStorage('mnemonic', mnemonic);

      setIsLoading(false);
      setShowWalletSheet(false);
      setShowSuccessWalletSheet(true);
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    await connector.connect();
    navigation.navigate(SIGN_MESSAGE);
  };

  const navigationToNextScreen = () => {
    navigation.navigate(NAME_SCREEN);
  };

  const toggleWalletConfirmationSheet = () => {
    setShowWalletSheet(!showWalletSheet);
  };

  return (
    <>
      <SkyBackground
        style={{
          justifyContent: 'center',
        }}>
        <HexagonBackground>
          <VStack style={styles.content}>
            <Spacer height={100} />
            <LargeIcon />
            <Spacer height={430} />
            <Button
              isLoading={false}
              backgroundColor={Colors.BLUE}
              onPress={connectWallet}>
              <View style={styles.buttonContainer}>
                <WalletConnectIcon color={Colors.WHITE} size="medium" />
                <Text
                  color={Colors.WHITE}
                  style={{
                    marginLeft: 15,
                  }}
                  weight="bold"
                  translationKey="onBoardingScreen.prevUserButtonText"
                />
              </View>
            </Button>
            <Spacer height={20} />
            <Button
              isLoading={isLoading}
              backgroundColor={Colors.WHITE}
              onPress={toggleWalletConfirmationSheet}>
              <Text
                color={Colors.BLACK}
                translationKey="onBoardingScreen.newUserButtonText"
                weight="bold"
              />
            </Button>
            <Spacer height={70} />
          </VStack>
        </HexagonBackground>
      </SkyBackground>
      {showWalletSheet && (
        <NewWalletConfirmation
          onCreateButtonPress={createWallet}
          loading={isLoading}
          onConnectButtonPress={connectWallet}
        />
      )}
      {showSuccessWalletSheet && (
        <SuccessWalletSheet onContinueButtonPress={navigationToNextScreen} />
      )}
    </>
  );
}

export default WelcomeScreen;
