import {
  Button,
  Text,
  VStack,
  Spacer,
  LocationIcon,
  HStack,
  Toast,
} from '$components';
import { Colors } from '$theme';
import { getLocation } from '$utils';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  SCREEN_HEIGHT,
} from '@gorhom/bottom-sheet';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Platform } from 'react-native';

import styles from './style';

const LocationSheet = ({
  show,
  onClose,
  setlocation,
}: {
  show: boolean;
  onClose: () => void;
  setlocation: (location?: any) => void;
}) => {
  const { t } = useTranslation();
  const customHandle = () => {
    return (
      <VStack align="center" justify="center" style={styles.header}>
        <LocationIcon size="large" color={Colors.DARK_PURPLE}></LocationIcon>
        <Spacer height={24} />
        <Text size="lg" weight="bold" color={Colors.DARK_PURPLE}>
          {t('locationSheet.header')}
        </Text>
      </VStack>
    );
  };
  return (
    <BottomSheet
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
      enablePanDownToClose
      keyboardBehavior="interactive"
      index={0}
      snapPoints={['50%']}
      onClose={onClose}
      android_keyboardInputMode="adjustResize"
      handleComponent={customHandle}>
      <BottomSheetScrollView style={styles.bottomSheetView}>
        <VStack justify="center" align="center">
          <HStack justify="center" align="center">
            <Text size="2xs" textAlign="center">
              {t('locationSheet.content')}
            </Text>
          </HStack>

          <Spacer height={20} />
          <VStack justify="center">
            <Text size="2xs" textAlign="center">
              {t('locationSheet.content_aux')}
            </Text>
          </VStack>
        </VStack>
        <Spacer height={20} />
        <VStack align="baseline">
          <Button
            backgroundColor={Colors.LIGHT_PURPLE}
            onPress={async () => { 
              await getLocation().then((data)=>{
                const location = data;
                if(!location || location === false) {
                  Toast.show({
                    autoHide: true,
                    text1: t('locationSheet.error'),
                    text2: t('locationSheet.givePermission'),
                    type: 'error',
                  });
                  return;
                }
                setlocation(location);
                onClose();
              }) 
            }}>
            <Text color={Colors.WHITE} size="sm" weight="semibold">
              {t('locationSheet.turnOn')}
            </Text>
          </Button>
          <Button
            backgroundColor={Colors.TRANSPARENT}
            onPress={() => {
              onClose();
            }}>
            <Text
              color={Colors.SEVENTYPERCENTPURPLE}
              size="sm"
              weight="semibold">
              {t('locationSheet.notNow')}
            </Text>
          </Button>
        </VStack>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default LocationSheet;
