import React from 'react';
import { Image, StyleSheet } from 'react-native';

import CosmicBackground from '../../shared/components/background/CosmicBackground';
import Button from '../../shared/components/button/Button';
import Spacer from '../../shared/components/stacks/Spacer';
import Text from '../../shared/components/text/Text';
import VStack from '../../shared/components/stacks/VStack';
import { colors } from '../../shared/theme/colors';
import Orbs from '../../shared/components/background/Orbs';

const pozIcon = require('../../../assets/poz.png');

const Welcome = () => {
  return (
    <CosmicBackground>
      <Orbs />
      <VStack style={styles.content}>
        <Spacer height={100} />
        <Image source={pozIcon} />
        <Spacer height={250} />
        <Button onPress={() => {}} backgroundColor={colors.pink}>
          <Text color={colors.white}>I'm New</Text>
        </Button>
        <Spacer height={20} />
        <Button onPress={() => {}} backgroundColor={colors.white}>
          <Text>Login with Crypto Wallet</Text>
        </Button>
        <Spacer />
      </VStack>
    </CosmicBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
  },
});

export default Welcome;
