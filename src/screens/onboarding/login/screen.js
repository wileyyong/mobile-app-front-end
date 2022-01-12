import { Button, CosmicBackground, Orbs, Spacer, Text, VStack } from '$components';
import { Colors } from '$theme';

import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { connect } from 'react-redux';

import Style from './style';

const LoginWallet = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [secretPhrase, setSecretPhrase] = useState('');

  return (
    <CosmicBackground>
      <Orbs />
      <BlurView style={Style.blurContainer}>
        <VStack align="flex-start" justify="flex-start">
          <Text color={Colors.WHITE} size="lg">
            Login with Crypto Wallet
          </Text>
          <Spacer height={20} />
          <Text color={Colors.WHITE}>Wallet Address</Text>
          <Spacer height={10} />
          <Text color={Colors.WHITE} size="xs">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt.
          </Text>
          <Spacer height={10} />
          <BlurView blurType="light" style={Style.inputBlur}>
            <TextInput
              multiline
              placeholder="Wallet Address"
              placeholderTextColor={Colors.WHITE}
              style={Style.input}
              value={walletAddress}
              onChangeText={(text) => setWalletAddress(text)}
            />
          </BlurView>
          <Spacer height={20} />
          <Text color={Colors.WHITE}>Secret Phrase</Text>
          <Spacer height={10} />
          <Text color={Colors.WHITE} size="xs">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt.
          </Text>
          <Spacer height={10} />
          <BlurView blurType="light" style={Style.inputBlur}>
            <TextInput
              multiline
              placeholder="Secret Phrase"
              placeholderTextColor={Colors.WHITE}
              style={Style.input}
              value={secretPhrase}
              onChangeText={(text) => setSecretPhrase(text)}
            />
          </BlurView>
          <Spacer height={40} />
          <Button backgroundColor={Colors.WHITE} onPress={() => {}}>
            <Text>Import</Text>
          </Button>
        </VStack>
      </BlurView>
    </CosmicBackground>
  );
};

export default () => connect()(LoginWallet);
