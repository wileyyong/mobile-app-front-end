import { ImageBackground, Spacer, VStack } from '$components';
import React, { useRef } from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RAINBOW_GRADIENT } from 'src/shared/theme/colors';
import styles from '../style';
const pozIcon1 = require('src/assets/images/poz_token.png');
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { Colors } from '$theme';
import { t } from 'i18next';

const CustomBox = ({
  updatePoz,
  pozPledge,
}: {
  updatePoz: (value: number) => void;
  pozPledge: number;
}) => {
  const defaultPledge = [0.1, 0.25, 0.5];
  const textInputRef = useRef<any>();

  const customFocused =
    textInputRef?.current?.isFocused() || !defaultPledge.includes(pozPledge);

  return (
    <TouchableOpacity
      onPress={() => {
        updatePoz(0);
        if (!textInputRef?.current?.isFocused()) textInputRef?.current?.focus();
      }}
      style={styles.touchableContainer}>
      <VStack style={styles.pledgeBox}>
        <Image
          resizeMode={Platform.OS === 'android' ? 'center' : 'cover'}
          style={styles.pozIcon}
          source={pozIcon1}
        />
        <Spacer height={10} />
        <BottomSheetTextInput
          ref={textInputRef}
          onChangeText={txt => updatePoz(Number(txt))}
          onFocus={() => updatePoz(0)}
          // value={pozPledge.toString() + " POZ"}
          placeholderTextColor={Colors.OFFWHITE}
          keyboardType={'number-pad'}
          placeholder={t('pozzlePledgeSheet.custom')}
          style={[styles.pozText, styles.customPozText]}
        />
      </VStack>

      {(pozPledge === 0 || customFocused) && (
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

export default CustomBox;
