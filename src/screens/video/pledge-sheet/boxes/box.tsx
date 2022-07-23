import { Spacer, Text, VStack } from '$components';
import { BorderRadius, Colors, Scaling } from '$theme';
import { t } from 'i18next';
import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RAINBOW_GRADIENT } from 'src/shared/theme/colors';
import styles from '../style';
const pozIcon1 = require('src/assets/images/poz_token.png');
const pozIcon2 = require('src/assets/images/poz_token_x2.png');
const pozIcon3 = require('src/assets/images/poz_token_x3.png');

const Box = ({
  item,
  onPress,
  pozPledge,
}: {
  item: number;
  onPress: () => void;
  pozPledge: number;
}) => {
  return (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={onPress}
      activeOpacity={0.8}>
      <VStack style={styles.pledgeBox}>
        <Image
          resizeMode={Platform.OS === 'android' ? 'center' : 'contain'}
          style={
            item === 0.1
              ? styles.pozIcon
              : item === 0.25
              ? styles.pozIcon2
              : item === 0.5
              ? styles.pozIcon3
              : styles.pozIcon
          }
          source={
            item === 0.1
              ? pozIcon1
              : item === 0.25
              ? pozIcon2
              : item === 0.5
              ? pozIcon3
              : pozIcon1
          }
        />
        <Spacer height={10} />
        <Text
          size="sm"
          style={styles.pozText}
          weight={'bold'}
          color={Colors.OFFWHITE}>
          {item + ' ' + t('pozzlePledgeSheet.poz')}
        </Text>
      </VStack>

      {pozPledge === item && (
        <LinearGradient
          colors={RAINBOW_GRADIENT}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.rainbowborder}>
          <View style={styles.rainbowInner} />
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export default Box;
