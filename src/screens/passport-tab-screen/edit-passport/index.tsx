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
import { launchImageLibrary } from 'react-native-image-picker';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  Pressable,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../style';

interface IEditPassportSheet {
  onClose: () => void;
  show: boolean;
}
const pozzlePilot = require('src/assets/images/pozzlePilot.png');
const EditPassport = ({ show, onClose }: IEditPassportSheet) => {
  const { t } = useTranslation();
  const userRedux = useSelector(state => state.user);
  console.log('userRedux',userRedux);
  const [user, setuserData] = useState({
    bio: userRedux.user.bio,
    userName: userRedux.user.userName,
    pronounce: userRedux.user.pronounce,
    profilePhoto:   pozzlePilot,
  });

  const updateUserData = (key: string, value: string | object) => {
    setuserData(v => ({ ...v, [key]: value }));
  };

  const updateUserPassport = () => {
    // This needs to be done once we integrate the PZ-69 on main
  };

  return (
    <Modal
      visible={show}
      onDismiss={onClose}
      style={styles.settingsModal}
      animationType="fade">
      <ScrollView>
        <CosmicBackground>
          <View style={[styles.iconsView, styles.settingsHeader]}>
            <Text
              style={styles.editText}
              size="lg"
              color={Colors.WHITE}
              style={styles.headerText}>
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
                <Pressable 
                  onPress={async () => { 
                      const result = await launchImageLibrary({mediaType:'photo'});
                      console.log('result',result);
                      if(result.assets) {
                        console.log('result.assets[0].uri',result.assets[0].uri)
                        updateUserData('profilePhoto', result.assets[0].uri)
                      } 
                  }}>
                  <WrappedImage
                    style={styles.userImage}
                    source={user.profilePhoto}
                    height={112}
                    width={112}></WrappedImage>
                  <Text style={styles.editPhotoText}>
                    {t('editPassportScreen.changePhoto')}
                  </Text>
                </Pressable>
              </VStack>
              <VStack align="flex-start" style={styles.editModalRow}>
                <Text style={styles.editText}>
                  {t('editPassportScreen.username')}
                </Text>
                <Input
                  blurType={'light'}
                  style={{ color: Colors.DARK_PURPLE }}
                  onChangeText={text => updateUserData('userName', text)}
                  placeholder={t('editPassportScreen.username')}
                  size={'full'}
                  value={user.userName}></Input>
              </VStack>

              <VStack align="flex-start" style={styles.editModalRow}>
                <Text style={styles.editText}>
                  {t('editPassportScreen.pronounce')}
                </Text>
                <Input
                  blurType={'light'}
                  style={{ color: Colors.DARK_PURPLE }}
                  onChangeText={text => updateUserData('pronounce', text)}
                  placeholder={t('editPassportScreen.pronounce')}
                  size={'full'}
                  value={user.pronounce}></Input>
              </VStack>

              <VStack align="flex-start" style={styles.editModalRow}>
                <Text style={styles.editText}>
                  {t('editPassportScreen.bio')}
                </Text>
                <Input
                  blurType={'light'}
                  style={{ color: Colors.DARK_PURPLE }}
                  multiline
                  placeholder={t('editPassportScreen.bio')}
                  size="medium"
                  value={user.bio}
                  onChangeText={text => updateUserData('bio', text)}
                />
              </VStack>

              <HStack style={styles.editModalRow}>
                <Button
                  isLoading={false}
                  backgroundColor={Colors.LIGHT_PURPLE}
                  onPress={updateUserPassport}>
                  <Text style={styles.editTextButton} color={Colors.WHITE}>
                    {t('editPassportScreen.save')}
                  </Text>
                </Button>
              </HStack>
            </VStack>
          </View>
        </CosmicBackground>
      </ScrollView>
    </Modal>
  );
};

export default EditPassport;
