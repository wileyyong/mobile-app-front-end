import { Image, View } from 'react-native';
import React, { useRef, useMemo, useCallback } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Button, Spacer, Text, VStack, CustomBackdrop } from '$components';
import { Colors } from '$theme';
import styles from './style';
import { useTranslation } from 'react-i18next';

const backupIcon = require('src/assets/images/backup.png');

interface IProps {
  onButtonPress: () => void;
}

export default function BackupWalletConfirmation({ onButtonPress }: IProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '35%'], []);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  const { t } = useTranslation();

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      backdropComponent={CustomBackdrop}
      handleComponent={() => null}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <View style={styles.content}>
        <VStack>
          <Spacer height={20} />
          <Image source={backupIcon} />
          <Spacer height={20} />
          <Text
            size="2md"
            style={{
              fontWeight: 'bold',
            }}
            color={Colors.DARK_PURPLE}>
            {t('BackupWalletConfirmation.title')}
          </Text>
          <Spacer height={20} />
          <Text
            size="xs"
            style={styles.text}
            color={Colors.SEVENTYPERCENTPURPLE}>
            {t('BackupWalletConfirmation.description')}
          </Text>

          <Spacer height={40} />
          <Button onPress={onButtonPress} backgroundColor={Colors.LIGHT_PURPLE}>
            <Text
              color={Colors.WHITE}
              weight="bold"
              translationKey={'BackupWalletConfirmation.BackUpNow'}
            />
          </Button>
          <Spacer height={20} />
        </VStack>
      </View>
    </BottomSheet>
  );
}
