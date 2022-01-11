import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import Text from '../text/Text';
import VStack from '../stacks/VStack';
import HStack from '../stacks/HStack';
import Spacer from '../stacks/Spacer';
import { colors } from '../../theme/colors';

import styles from './style';

const Passport = () => {
  return (
    <ImageBackground style={styles.metalicBorderContainer} source={require('$assets/metalic-texture.png')}>
      <VStack style={styles.passportContent}>
        <HStack justify="space-between">
          <ImageBackground style={styles.pfpBorderContainer} source={require('$assets/metalic-texture.png')}>
            <Image width={80} height={80} style={styles.pfpImage} source={require('$assets/icon.png')} />
          </ImageBackground>
          <VStack style={{ flexGrow: 1, marginLeft: 10 }}>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text size="xs" color={colors.BLACK}>
                  Australia
                </Text>
              </View>
            </View>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text size="xs" color={colors.BLACK}>
                  Pozzler1
                </Text>
              </View>
            </View>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text size="xs" color={colors.BLACK}>
                  pozzler.eth
                </Text>
              </View>
            </View>
          </VStack>
        </HStack>
        <Spacer height={10} />
        <View style={styles.bioBox}>
          <Text size="xs" color={colors.BLACK}>
            Bio
          </Text>
        </View>
      </VStack>
    </ImageBackground>
  );
};

export default Passport;
