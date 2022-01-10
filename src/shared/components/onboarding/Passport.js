import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import Text from '../text/Text';
import VStack from '../stacks/VStack';
import HStack from '../stacks/HStack';
import Spacer from '../stacks/Spacer';
import { colors } from '../../theme/colors';

const Passport = () => {
  return (
    <ImageBackground style={styles.metalicBorderContainer} source={require('../../../../assets/metalic-texture.png')}>
      <VStack style={styles.passportContent}>
        <HStack justify="space-between">
          <ImageBackground style={styles.pfpBorderContainer} source={require('../../../../assets/metalic-texture.png')}>
            <Image width={80} height={80} style={styles.pfpImage} source={require('../../../../assets/icon.png')} />
          </ImageBackground>
          <VStack style={{ flexGrow: 1, marginLeft: 10 }}>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text size="xs" color={colors.black}>
                  Australia
                </Text>
              </View>
            </View>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text size="xs" color={colors.black}>
                  Pozzler1
                </Text>
              </View>
            </View>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text size="xs" color={colors.black}>
                  pozzler.eth
                </Text>
              </View>
            </View>
          </VStack>
        </HStack>
        <Spacer height={10} />
        <View style={styles.bioBox}>
          <Text size="xs" color={colors.black}>
            Bio
          </Text>
        </View>
      </VStack>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  metalicBorderContainer: {
    width: '100%',
    paddingVertical: 8,
    borderRadius: 15,
    overflow: 'hidden',
  },
  passportContent: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    padding: 20,
  },
  pfpBorderContainer: {
    padding: 4,
    borderRadius: 10,
    overflow: 'hidden',
  },
  pfpImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  underline: {
    borderWidth: 1,
    marginTop: -1,
    marginHorizontal: -1,
    borderStyle: 'dashed',
    borderColor: colors.gray3,
    paddingLeft: 5,
  },
  underlineOverflow: {
    height: 20,
    overflow: 'hidden',
    width: '100%',
    marginVertical: 5,
  },
  bioBox: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 10,
    height: 100,
    borderColor: colors.gray3,
    width: '100%',
    padding: 10,
  },
});

export default Passport;
