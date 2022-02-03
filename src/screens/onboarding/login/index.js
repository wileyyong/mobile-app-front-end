import { PASSPORT_SCREEN } from '$constants';
import { Button, CosmicBackground, Orbs, Spacer, Text, VStack, Input, BlurView } from '$components';
import { Colors } from '$theme';

import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Style from './style';

const LoginScreen = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [secretPhrase, setSecretPhrase] = useState('');

  const navigation = useNavigation();
  const toPassportScreen = () => navigation.navigate(PASSPORT_SCREEN);
  const platformBlurType = Platform.select({ android: 'dark', ios: 'ultraThinMaterialDark' });
  const disableImportButton = !walletAddress || !secretPhrase;

  return (
    <CosmicBackground>
      <Orbs />
      <BlurView blurAmount={50} blurType={platformBlurType} style={Style.blurContainer}>
        <VStack align="flex-start" justify="flex-start">
          <Text color={Colors.WHITE} size="lg" weight="bold">
            Login with Crypto Wallet
          </Text>
          <Spacer height={20} />
          <Text color={Colors.WHITE} weight="bold">
            Wallet Address
          </Text>
          <Spacer height={10} />
          <Text color={Colors.WHITE} size="xs">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incidiunt.
          </Text>
          <Spacer height={10} />
          <Input
            multiline
            placeholder="0x3e22cq7rc9w75t897c98t9n7r8c74937tx897tc4n797ntc9"
            size="small"
            value={walletAddress}
            onChangeText={(text) => setWalletAddress(text)}
          />
          <Spacer height={20} />
          <Text color={Colors.WHITE} weight="bold">
            Secret Phrase
          </Text>
          <Spacer height={10} />
          <Text color={Colors.WHITE} size="xs">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incidiunt.
          </Text>
          <Spacer height={10} />
          <Input
            multiline
            placeholder="Secret Phrase"
            size="medium"
            value={secretPhrase}
            onChangeText={(text) => setSecretPhrase(text)}
          />
          <Spacer height={40} />
          <Button
            backgroundColor={Colors.WHITE}
            disabled={disableImportButton}
            onPress={toPassportScreen}
          >
            <Text weight="bold">Import</Text>
          </Button>
        </VStack>
      </BlurView>
    </CosmicBackground>
  );
};

export default LoginScreen;
