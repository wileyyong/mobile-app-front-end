import { Text, VStack, HStack, Spacer } from '$components';

import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { colors } from '$theme/colors';

import styles from './style';

const BACKGROUND_TEXTURE = require('$assets/metalic-texture.png');

const ICON = require('$assets/icon.png');

const Passport = () => {
  return (
    <ImageBackground source={BACKGROUND_TEXTURE} style={styles.metalicBorderContainer}>
      <VStack style={styles.passportContent}>
        <HStack justify="space-between">
          <ImageBackground source={BACKGROUND_TEXTURE} style={styles.pfpBorderContainer}>
            <Image height={80} source={ICON} style={styles.pfpImage} width={80} />
          </ImageBackground>
          <VStack style={{ flexGrow: 1, marginLeft: 10 }}>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text color={colors.BLACK} size="xs">
                  Australia
                </Text>
              </View>
            </View>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text color={colors.BLACK} size="xs">
                  Pozzler1
                </Text>
              </View>
            </View>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text color={colors.BLACK} size="xs">
                  pozzler.eth
                </Text>
              </View>
            </View>
          </VStack>
        </HStack>
        <Spacer height={10} />
        <View style={styles.bioBox}>
          <Text color={colors.BLACK} size="xs">
            Bio
          </Text>
        </View>
      </VStack>
    </ImageBackground>
  );
};

export default Passport;
