import { Text, VStack, HStack, Spacer, ImageBackground } from '$components';
import { Colors } from '$theme';
import { formatYMD, getEllipsisTxt, loc2address } from '$utils';

import React from 'react';
import { Image, View } from 'react-native';

import styles from './style';

const BACKGROUND_TEXTURE = require('src/assets/images/metalic-texture.png');
const ICON = require('src/assets/images/icon.png');

interface IPozzleUser {
  pfp: string;
  username: string;
  country: string;
  bio: string;
  pronouns: string;
  address: string;
}

const Passport = ({ pfp, username, country, bio, pronouns, address }: IPozzleUser) => {
  return (
    <ImageBackground
      source={BACKGROUND_TEXTURE}
      style={styles.metalicBorderContainer}>
      <VStack style={styles.passportContent}>
        <HStack justify="space-between">
          <Image
            width={83}
            height={93}
            source={pfp ? { uri: pfp } : ICON}
            style={styles.pfpImage}
          />
          <VStack style={{ flexGrow: 1, marginLeft: 10 }}>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text color={Colors.BLACK} size="xxs">
                  {country}
                </Text>
              </View>
            </View>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <HStack justify='flex-start'>
                  <Text color={Colors.BLACK} size="xxs">
                    {username}
                  </Text>
                  <Text color={Colors.GRAY2} size="xxs">
                    {pronouns ? ` (${pronouns})` : ''}
                  </Text>
                </HStack>
              </View>
            </View>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text color={Colors.BLACK} size="xxs">
                  {getEllipsisTxt(address, 13)}
                </Text>
              </View>
            </View>
            <View style={styles.underlineOverflow}>
              <View style={styles.underline}>
                <Text color={Colors.BLACK} size="xxs">
                  {formatYMD(new Date())}
                </Text>
              </View>
            </View>
          </VStack>
        </HStack>
        <Spacer height={10} />
        <View style={styles.bioBox}>
          <Text color={Colors.BLACK} size="xxs">
            {bio}
          </Text>
        </View>
      </VStack>
    </ImageBackground>
  );
};

export default Passport;
