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
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { useDispatch } from 'react-redux';
import { setIsNewUser } from 'src/redux/user/actions';
import {
  addressFromMnemonic,
  fetchItemFromStorage,
  generateMnemonic,
  setItemToStorage,
} from '$utils';
import LargeIcon from 'src/assets/images/LargeLogo.svg';
import * as Sentry from "@sentry/react-native";

function WelcomeScreen() {
  const navigation = useNavigation();
  const connector = useWalletConnect();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [screenLoading, setScreenLoading] = useState<boolean>(false);
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

      await setItemToStorage('CreatedNewWallet', 'true');
      setIsLoading(false);
      setShowWalletSheet(false);
      setShowSuccessWalletSheet(true);
    } catch (error) {
      Sentry.captureException(error);
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

  const checkUserLoggedIn = async () => {
    setScreenLoading(true);
    const address = await fetchItemFromStorage('address');
    if (address) {
      navigation.navigate('Explorer', {
        screen: 'Home',
      });
      setScreenLoading(false);
    } else {
      setScreenLoading(false);
    }
  };

  useEffect(() => {
    // checkUserLoggedIn();
  }, []);

  if (screenLoading) {
    return <View />;
  }

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
            <Spacer height={437} />
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
            <Spacer height={19} />
            <Button
              isLoading={isLoading}
              backgroundColor={Colors.WHITE}
              onPress={toggleWalletConfirmationSheet}>
              <Text
                color={Colors.DARK_PURPLE}
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
          onClose={toggleWalletConfirmationSheet}
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
