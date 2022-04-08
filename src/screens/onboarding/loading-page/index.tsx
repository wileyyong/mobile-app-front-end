import { NEW_PASSPORT_SCREEN } from '$constants';
import { CosmicBackground, Orbs, VStack, BlurView } from '$components';
import { Colors } from '$theme';

import React, { useEffect, useState } from 'react';
import { Platform, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { convertUtf8ToHex } from '@walletconnect/utils';
import Style from './style';
import { connect } from 'react-redux';
import { loginUser } from 'src/redux/user/actions';
import { AppState } from 'src/redux/types';
import { ILoginUserProfilePayload } from 'src/shared/api/user/models';

interface OnboardingLoadingScreen {
  loginUser: (payload: ILoginUserProfilePayload) => Promise<void>;
}

const OnboardingLoadingScreen = ({ loginUser }) => {
  const navigation = useNavigation();
  const connector = useWalletConnect();
  const platformBlurType = Platform.select({
    android: 'dark',
    ios: 'ultraThinMaterialDark',
  });

  const getSignature = async (message: string): Promise<string | void> => {
    const hexMsg = convertUtf8ToHex(message);
    const msgParams = [hexMsg, connector.accounts[0]];
    return connector.signPersonalMessage(msgParams);
  };

  useEffect(() => {
    const getUserSignature = async () => {
      const message = `App name is Pozzle Planet - ${new Date().toUTCString()}`;
      getSignature(message)
        .then(async response => {
          const data = {
            signedMsg: {
              message: message,
              signature: response as string,
            },
          };

          const result = await loginUser(data);
          if (result.requestStatus === 'failure') {
            navigation.navigate(NEW_PASSPORT_SCREEN);
          }
        })
        .catch(response => {});
    };

    setTimeout(() => {
      getUserSignature();
    }, 3000);
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
        <VStack align="center" justify="center" style={{ width: '100%' }}>
          <ActivityIndicator size="large" color={Colors.WHITE} />
        </VStack>
      </BlurView>
    </CosmicBackground>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    requestStatus: state.user.requestStatus,
  };
};

const mapDispatchToProps = {
  loginUser,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OnboardingLoadingScreen);
