import CosmicBackground from '$components/background/CosmicBackground';
import Button from '$components/button/Button';
import Spacer from '$components/stacks/Spacer';
import Text from '$components/text/Text';
import VStack from '$components/stacks/VStack';
import Orbs from '$components/background/Orbs';

import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import { colors } from '../../../shared/theme/colors';

const LoginWithCryptoWallet = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [secretPhrase, setSecretPhrase] = useState('');

  return (
    <CosmicBackground>
      <Orbs />
      <BlurView style={styles.blurContainer}>
        <VStack align="flex-start" justify="flex-start">
          <Text size="lg" color={colors.WHITE}>
            Login with Crypto Wallet
          </Text>
          <Spacer height={20} />
          <Text color={colors.WHITE}>Wallet Address</Text>
          <Spacer height={10} />
          <Text size="xs" color={colors.WHITE}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt.
          </Text>
          <Spacer height={10} />
          <BlurView blurType="light" style={styles.inputBlur}>
            <TextInput
              style={styles.input}
              value={walletAddress}
              multiline
              placeholder="Wallet Address"
              placeholderTextColor={colors.WHITE}
              onChangeText={(text) => setWalletAddress(text)}
            />
          </BlurView>
          <Spacer height={20} />
          <Text color={colors.WHITE}>Secret Phrase</Text>
          <Spacer height={10} />
          <Text size="xs" color={colors.WHITE}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt.
          </Text>
          <Spacer height={10} />
          <BlurView blurType="light" style={styles.inputBlur}>
            <TextInput
              style={styles.input}
              value={secretPhrase}
              multiline
              placeholder="Secret Phrase"
              placeholderTextColor={colors.WHITE}
              onChangeText={(text) => setSecretPhrase(text)}
            />
          </BlurView>
          <Spacer height={40} />
          <Button onPress={() => {}} backgroundColor={colors.WHITE}>
            <Text>Import</Text>
          </Button>
        </VStack>
      </BlurView>
    </CosmicBackground>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  inputBlur: {
    width: '100%',
    height: 100,
    padding: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  input: {
    color: colors.WHITE,
  },
});

export default LoginWithCryptoWallet;
