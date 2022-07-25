import {
  Button,
  Text,
  VStack,
  Spacer,
  LocationIcon,
  HStack,
  Toast,
} from '$components';
import { Colors, Scaling } from '$theme';
import { getLocation } from '$utils';
import Modal from "react-native-modal";

import React from 'react';
import { useTranslation } from 'react-i18next';
import {   Platform, TouchableWithoutFeedback, View } from 'react-native';

import styles from './style';
import { showLocationSheet } from 'src/redux/generic/actions';
import { useDispatch, useSelector } from 'react-redux';

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
  const dispatch = useDispatch();
  const reduxGeneric = useSelector((state: any) => state.generic);
  
  return (
    <View>
      <Modal 
        isVisible={reduxGeneric.showLocationSheet} 
        hasBackdrop={true}
        backdropColor={Colors.DARK_PURPLE}
        backdropOpacity={0.40}
        onBackdropPress={()=>{ dispatch(showLocationSheet(false)) }}
        style={styles.modalLocation}>
          <View style={styles.bottomSheetView}>
              <VStack align="center" justify="center" style={styles.header}>
                <LocationIcon size="large" color={Colors.DARK_PURPLE}></LocationIcon>
                <Spacer height={24} />
                <Text size="lg" weight="bold" color={Colors.DARK_PURPLE}>
                  {t('locationSheet.header')}
                </Text>
              </VStack>
              <Spacer height={20} />
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
          </View>
      </Modal>
    </View>
  );
};

export default LocationSheet;
/*
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




      </BottomSheetScrollView>
    </BottomSheet>
*/