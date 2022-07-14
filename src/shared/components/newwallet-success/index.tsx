import { Image, View } from 'react-native';
import React, { useRef, useMemo, useCallback } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {
  Button,
  Spacer,
  Text,
  VStack,
  CustomBackdrop,
  CheckMarkIcon,
} from '$components';
import { Colors } from '$theme';
import styles from './style';
import { useTranslation } from 'react-i18next';

const pozLogo = require('src/assets/images/check.png');

interface IProps {
  onContinueButtonPress: () => void;
}

export default function SuccessWalletSheet({ onContinueButtonPress }: IProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['40%', '40%'], []);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  const { t } = useTranslation();

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      handleComponent={() => null}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onChange={handleSheetChanges}>
      <View style={styles.content}>
        <VStack>
          <Spacer height={40} />
          <CheckMarkIcon color={Colors.DARK_PURPLE} size="xlarge" />
          <Spacer height={35} />
          <Text
            size="2md"
            style={{
              fontWeight: 'bold',
            }}
            color={Colors.DARK_PURPLE}>
            {t('onBoardingScreen.successWallet.title')}
          </Text>
          <Spacer height={20} />
          <Text
            style={styles.text}
            size="2xs"
            color={Colors.SEVENTYPERCENTPURPLE}>
            {t('onBoardingScreen.successWallet.description')}
          </Text>
          <Spacer height={40} />
          <Button
            onPress={onContinueButtonPress}
            backgroundColor={Colors.LIGHT_PURPLE}>
            <Text
              color={Colors.WHITE}
              weight="bold"
              translationKey="onBoardingScreen.successWallet.continueButton"
            />
          </Button>
          <Spacer height={20} />
        </VStack>
      </View>
    </BottomSheet>
  );
}
