import { Image, View } from 'react-native';
import React, { useRef, useMemo, useCallback } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Button, Spacer, Text, VStack, CustomBackdrop } from '$components';
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

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const { t } = useTranslation();

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      handleComponent={() => null}
      snapPoints={snapPoints}
      backdropComponent={CustomBackdrop}
      onChange={handleSheetChanges}>
      <View style={styles.content}>
        <VStack>
          <Spacer height={20} />
          <Image source={pozLogo} />
          <Spacer height={20} />
          <Text
            size="lg"
            style={{
              fontWeight: 'bold',
            }}
            color={Colors.DARK_PURPLE}>
            {t('successWallet.title')}
          </Text>
          <Spacer height={20} />
          <Text
            style={styles.text}
            size="xs"
            color={Colors.SEVENTYPERCENTPURPLE}>
            {t('successWallet.description')}
          </Text>
          <Spacer height={40} />
          <Button
            onPress={onContinueButtonPress}
            backgroundColor={Colors.LIGHT_PURPLE}>
            <Text
              color={Colors.WHITE}
              weight="bold"
              translationKey="successWallet.continueButton"
            />
          </Button>
          <Spacer height={20} />
        </VStack>
      </View>
    </BottomSheet>
  );
}
