import { Text, VStack, HStack, Spacer, ImageBackground } from '$components';
import { Colors } from '$theme';

import React from 'react';
import { Image, View } from 'react-native';
import { PropTypes } from 'prop-types';

import styles from './style';

const BACKGROUND_TEXTURE = require('$assets/metalic-texture.png');
const ICON = require('$assets/icon.png');

const Passport = ({ pfp, username, location, bio, pronouns }) => {
  return (
    <ImageBackground source={BACKGROUND_TEXTURE} style={styles.metalicBorderContainer}>
      <VStack style={styles.passportContent}>
        <HStack justify="space-between">
          <ImageBackground source={BACKGROUND_TEXTURE} style={styles.pfpBorderContainer}>
            <Image
              height={80}
              source={pfp ? { uri: pfp } : ICON}
              style={styles.pfpImage}
              width={80}
            />
          </ImageBackground>
          <VStack style={{ flexGrow: 1, marginLeft: 10 }}>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text color={Colors.BLACK} size="xs">
                  {location}
                </Text>
              </View>
            </View>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text color={Colors.BLACK} size="xs">
                  {username}
                </Text>
              </View>
            </View>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text color={Colors.BLACK} size="xs">
                  {pronouns}
                </Text>
              </View>
            </View>
          </VStack>
        </HStack>
        <Spacer height={10} />
        <View style={styles.bioBox}>
          <Text color={Colors.BLACK} size="xs">
            {bio}
          </Text>
        </View>
      </VStack>
    </ImageBackground>
  );
};

Passport.defaultProps = {
  bio: '',
  location: '',
  pfp: null,
  pronouns: '',
  username: '',
};

Passport.propTypes = {
  bio: PropTypes.string,
  location: PropTypes.string,
  pfp: PropTypes.string,
  pronouns: PropTypes.string,
  username: PropTypes.string,
};

export default Passport;
