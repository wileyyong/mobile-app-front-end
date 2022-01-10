import CosmicBackground from '$components/background/CosmicBackground';
import Button from '$components/button/Button';
import Spacer from '$components/stacks/Spacer';
import Text from '$components/text/Text';
import VStack from '$components/stacks/VStack';
import Orbs from '$components/background/Orbs';

import React from 'react';
import { Image } from 'react-native';

import { colors } from '../../../shared/theme/colors';

import styles from './style';

const pozIcon = require('$assets/poz.png');

const Welcome = () => {
  return (
    <CosmicBackground>
      <Orbs />
      <VStack style={styles.content}>
        <Spacer height={100} />
        <Image source={pozIcon} />
        <Spacer height={250} />
        <Button onPress={() => {}} backgroundColor={colors.PINK}>
          <Text color={colors.WHITE}>I'm New</Text>
        </Button>
        <Spacer height={20} />
        <Button onPress={() => {}} backgroundColor={colors.WHITE}>
          <Text>Login with Crypto Wallet</Text>
        </Button>
        <Spacer />
      </VStack>
    </CosmicBackground>
  );
};

export default Welcome;
