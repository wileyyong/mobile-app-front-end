import { Image, View } from 'react-native';
import React, { useRef, useMemo, useCallback } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Button, Spacer, Text, VStack, CustomBackdrop } from '$components';
import { Colors } from '$theme';
import styles from './style';
import { useTranslation } from 'react-i18next';
import PozLogo from 'src/assets/images/PozIcon.svg';

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

  const snapPoints = useMemo(() => ['25%', '52.5%'], []);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  const { t } = useTranslation();

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      enablePanDownToClose={true}
      backdropComponent={CustomBackdrop}
      handleComponent={() => null}
      snapPoints={snapPoints}
      backgroundStyle={{
        backgroundColor: '#F8F8F8',
      }}
      onChange={handleSheetChanges}>
      <View style={styles.content}>
        <VStack>
          <Spacer height={20} />
          <PozLogo />
          <Spacer height={20} />
          <Text
            size="2md"
            style={{
              fontWeight: 'bold',
            }}
            color={Colors.DARK_PURPLE}>
            {t('onBoardingScreen.newWalletConfirmation.title')}
          </Text>
          <Spacer height={30} />
          <Text
            size="2xs"
            style={styles.text}
            color={Colors.SEVENTYPERCENTPURPLE}>
            {t('onBoardingScreen.newWalletConfirmation.description')}
          </Text>
          <Spacer height={26} />
          <Text
            style={styles.text}
            size="2xs"
            color={Colors.SEVENTYPERCENTPURPLE}>
            {t('onBoardingScreen.newWalletConfirmation.description2')}
          </Text>
          <Spacer height={25} />
          <Button
            onPress={onCreateButtonPress}
            isLoading={loading}
            disabled={loading}
            backgroundColor={Colors.LIGHT_PURPLE}>
            <Text
              color={Colors.WHITE}
              weight="bold"
              translationKey={
                'onBoardingScreen.newWalletConfirmation.createButton'
              }
            />
          </Button>
          <Spacer height={19} />
          <Text
            onPress={onConnectButtonPress}
            style={{
              fontWeight: 'bold',
            }}
            size="md"
            color={Colors.SEVENTYPERCENTPURPLE}>
            {t('onBoardingScreen.newWalletConfirmation.connectButton')}
          </Text>
        </VStack>
      </View>
    </BottomSheet>
  );
}
