import {
  Button,
  CloseXIcon,
  CosmicBackground,
  HStack,
  Input,
  PozLogo,
  Spacer,
  Text,
  VStack,
  WrappedImage,
} from '$components';
import { Colors } from '$theme';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, TouchableOpacity, Modal } from 'react-native';
import styles from '../style';

interface IEditPassportSheet {
  onClose: () => void;
  show: boolean;
}
const pozzlePilot = require('src/assets/images/pozzlePilot.png');
const EditPassport = ({ show, onClose }: IEditPassportSheet) => {
  const { t } = useTranslation();
  return (
    <Modal
      visible={show}
      onDismiss={onClose}
      style={styles.settingsModal}
      animationType="fade">
      <CosmicBackground>
        <View style={[styles.iconsView, styles.settingsHeader]}>
          <Text size="lg" color={Colors.WHITE} style={styles.headerText}>
            {t('editPassportScreen.editPassport')}
          </Text>
          <TouchableOpacity style={styles.settingsIcon} onPress={onClose}>
            <CloseXIcon
              width={15}
              height={15}
              color={Colors.WHITE}
              style={{ top: 10 }}></CloseXIcon>
          </TouchableOpacity>
        </View>
        <View style={styles.editModalContainer}>
          <PozLogo
            color={Colors.LIGHT_PURPLE}
            width={400}
            height={60}
            size={'medium'}></PozLogo>
          <VStack style={styles.editSummary}>
            <VStack>
              <WrappedImage
                style={styles.userImage}
                source={pozzlePilot}
                height={112}
                width={112}></WrappedImage>
              <Text>Change Photo</Text>
            </VStack>
            <VStack>
              <Text>{t('editPassportScreen.username')}</Text>
              <Input
                onChangeText={text => {}}     
                 placeholder={t('editPassportScreen.username')}
               
                size={'small'}
                value={''}
                reference={undefined}
                style={{}}></Input>
            </VStack>

            <VStack>
              <Text>{t('editPassportScreen.pronounce')}</Text>
              <Input
                onChangeText={text => {}}    
                placeholder={t('editPassportScreen.pronounce')}
                size={'small'}
                value={''}
                reference={undefined}
                style={{}}></Input>
            </VStack>

            
            <VStack>
              <Text>{t('editPassportScreen.bio')}</Text>
              <Input
                multiline
                placeholder={t('editPassportScreen.bio')}
                size="medium"
                value={''}
                onChangeText={text => { } } 
                reference={undefined} 
                style={{}}              />
            </VStack>

            <HStack>
              <Button isLoading={false}>
              <Text>{t('editPassportScreen.save')}</Text>
              </Button>
            </HStack>
    
          </VStack>
        </View>
      </CosmicBackground>
    </Modal>
  );
};

export default EditPassport;
