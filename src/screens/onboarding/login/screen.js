import CosmicBackground from '$components/background/CosmicBackground';
import Button from '$components/button/Button';
import Spacer from '$components/stacks/Spacer';
import Text from '$components/text/Text';
import VStack from '$components/stacks/VStack';
import Orbs from '$components/background/Orbs';

import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import { colors } from '$theme/colors';

import Style from './style';

const LoginWallet = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [secretPhrase, setSecretPhrase] = useState('');

  return (
    <CosmicBackground>
      <Orbs />
      <BlurView style={Style.blurContainer}>
        <VStack align="flex-start" justify="flex-start">
          <Text color={colors.WHITE} size="lg">
            Login with Crypto Wallet
          </Text>
          <Spacer height={20} />
          <Text color={colors.WHITE}>Wallet Address</Text>
          <Spacer height={10} />
          <Text color={colors.WHITE} size="xs">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt.
          </Text>
          <Spacer height={10} />
          <BlurView blurType="light" style={Style.inputBlur}>
            <TextInput
              multiline
              placeholder="Wallet Address"
              placeholderTextColor={colors.WHITE}
              style={Style.input}
              value={walletAddress}
              onChangeText={(text) => setWalletAddress(text)}
            />
          </BlurView>
          <Spacer height={20} />
          <Text color={colors.WHITE}>Secret Phrase</Text>
          <Spacer height={10} />
          <Text color={colors.WHITE} size="xs">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt.
          </Text>
          <Spacer height={10} />
          <BlurView blurType="light" style={Style.inputBlur}>
            <TextInput
              multiline
              placeholder="Secret Phrase"
              placeholderTextColor={colors.WHITE}
              style={Style.input}
              value={secretPhrase}
              onChangeText={(text) => setSecretPhrase(text)}
            />
          </BlurView>
          <Spacer height={40} />
          <Button backgroundColor={colors.WHITE} onPress={() => {}}>
            <Text>Import</Text>
          </Button>
        </VStack>
      </BlurView>
    </CosmicBackground>
  );
};

export default LoginWallet;
