import { Image, View } from 'react-native';
import React, { useRef, useMemo, useCallback } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Button, Spacer, Text, VStack, CustomBackdrop } from '$components';
import { Colors } from '$theme';
import styles from './style';
import { useTranslation } from 'react-i18next';

const pozLogo = require('src/assets/images/logo.png');

interface IProps {
  onCreateButtonPress: () => void;
  onConnectButtonPress: () => void;
  loading: boolean;
}

export default function NewWalletConfirmation({
  onCreateButtonPress,
  onConnectButtonPress,
  loading,
}: IProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

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
          <Image source={pozLogo} />
          <Spacer height={20} />
          <Text
            size="lg"
            style={{
              fontWeight: 'bold',
            }}
            color={Colors.DARK_PURPLE}>
            {t('newWalletConfirmation.title')}
          </Text>
          <Spacer height={20} />
          <Text
            size="xs"
            style={styles.text}
            color={Colors.SEVENTYPERCENTPURPLE}>
            {t('newWalletConfirmation.description')}
          </Text>
          <Spacer height={20} />
          <Text
            style={styles.text}
            size="xs"
            color={Colors.SEVENTYPERCENTPURPLE}>
            {t('newWalletConfirmation.description2')}
          </Text>
          <Spacer height={40} />
          <Button
            onPress={onCreateButtonPress}
            isLoading={loading}
            disabled={loading}
            backgroundColor={Colors.LIGHT_PURPLE}>
            <Text
              color={Colors.WHITE}
              weight="bold"
              translationKey={'newWalletConfirmation.createButton'}
            />
          </Button>
          <Spacer height={20} />
          <Text
            onPress={onConnectButtonPress}
            style={{
              fontWeight: 'bold',
            }}
            size="sm"
            color={Colors.SEVENTYPERCENTPURPLE}>
            {t('newWalletConfirmation.connectButton')}
          </Text>
        </VStack>
      </View>
    </BottomSheet>
  );
}
