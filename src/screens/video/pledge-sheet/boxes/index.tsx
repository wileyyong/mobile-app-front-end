import React, { useRef } from 'react';

import { t } from 'i18next';
import { Colors } from '$theme';
import {
  Text,
  HStack,
  VStack,
  ArrowRight,
  ImageBackground,
  Spacer,
} from '$components';
import styles from '../style';
import { Image, Keyboard, Platform, TouchableOpacity } from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

const pozIcon1 = require('src/assets/images/poz_token.png');
const pozIcon2 = require('src/assets/images/poz_token_x2.png');
const pozIcon3 = require('src/assets/images/poz_token_x3.png');

const BACKGROUND_TEXTURE = require('src/assets/images/rainbow.png');

const PledgeBoxes = ({ setPozPledge, pozPledge, updatePozValue }) => {
  const textInputRef = useRef();

  return (
    <VStack>
      <HStack justify="space-between">
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            setPozPledge(0.1);
          }}
          style={styles.touchableContainer}>
          {pozPledge === 0.1 && (
            <ImageBackground
              source={BACKGROUND_TEXTURE}
              style={styles.backgroundImage}></ImageBackground>
          )}
          <VStack
            style={[
              styles.pledgeBox,
              pozPledge === 0.1 ? styles.selectedPledge : '',
            ]}>
            <Image
              resizeMode={Platform.OS === 'android' ? 'center' : 'contain'}
              style={styles.pozIcon}
              source={pozIcon1}
            />
            <Spacer height={10} />
            <Text size="xs" style={styles.pozText} color={Colors.DARK_PURPLE}>
              {'0.1 ' + t('pozzlePledgeSheet.poz')}
            </Text>
          </VStack>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            setPozPledge(0.25);
          }}
          style={styles.touchableContainer}>
          {pozPledge === 0.25 && (
            <ImageBackground
              source={BACKGROUND_TEXTURE}
              style={styles.backgroundImage}></ImageBackground>
          )}
          <VStack
            style={[
              styles.pledgeBox,
              pozPledge === 0.25 ? styles.selectedPledge : '',
            ]}>
            <Image
              resizeMode={Platform.OS === 'android' ? 'center' : 'contain'}
              style={[styles.pozIcon, styles.pozIcon2]}
              source={pozIcon2}
            />
            <Spacer height={10} />
            <Text size="xs" style={styles.pozText} color={Colors.DARK_PURPLE}>
              {'0.25 ' + t('pozzlePledgeSheet.poz')}
            </Text>
          </VStack>
        </TouchableOpacity>
      </HStack>
      <HStack justify="space-between">
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            setPozPledge(0.5);
          }}
          style={styles.touchableContainer}>
          {pozPledge === 0.5 && (
            <ImageBackground
              source={BACKGROUND_TEXTURE}
              style={styles.backgroundImage}></ImageBackground>
          )}
          <VStack
            style={[
              styles.pledgeBox,
              pozPledge === 0.5 ? styles.selectedPledge : '',
            ]}>
            <Image
              resizeMode={Platform.OS === 'android' ? 'center' : 'contain'}
              style={[styles.pozIcon, styles.pozIcon3]}
              source={pozIcon3}
            />
            <Spacer height={10} />
            <Text size="xs" style={styles.pozText} color={Colors.DARK_PURPLE}>
              {'0.5 ' + t('pozzlePledgeSheet.poz')}
            </Text>
          </VStack>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPozPledge(0);
            if (!textInputRef.current.isFocused()) textInputRef.current.focus();
          }}
          style={styles.touchableContainer}>
          {pozPledge === 0 ||
            (textInputRef?.current?.isFocused() && (
              <ImageBackground
                source={BACKGROUND_TEXTURE}
                style={styles.backgroundImage}></ImageBackground>
            ))}
          <VStack
            style={[
              styles.pledgeBox,
              pozPledge === 0 || textInputRef?.current?.isFocused()
                ? styles.selectedPledge
                : '',
            ]}>
            <Image
              resizeMode={Platform.OS === 'android' ? 'center' : 'cover'}
              style={styles.pozIcon}
              source={pozIcon1}
            />
            <Spacer height={10} />
            <BottomSheetTextInput
              ref={textInputRef}
              multiline={false}
              onChangeText={updatePozValue}
              onFocus={() => {
                setPozPledge(0);
              }}
              placeholderTextColor={Colors.DARK_PURPLE}
              keyboardType={'number-pad'}
              placeholder={t('pozzlePledgeSheet.custom')}
              style={[
                styles.pozText,
                styles.customPozText,
              ]}></BottomSheetTextInput>
          </VStack>
        </TouchableOpacity>
      </HStack>
    </VStack>
  );
};

export default PledgeBoxes;
