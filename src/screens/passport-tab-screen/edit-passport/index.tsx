import {
  Button,
  CloseXIcon,
  CosmicBackground,
  HStack,
  Input,
  PozLogo,
  Spacer,
  Text,
  Toast,
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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../style';
import { Uploader, Users } from '$api'; 
import { updateUserData } from 'src/redux/user/actions';

interface IEditPassportSheet {
  onClose: () => void;
  show: boolean;
}
const pozzlePilot = require('src/assets/images/pozzlePilot.png');
const EditPassport = ({ show, onClose }: IEditPassportSheet) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const userRedux = useSelector(state => state.user);
  const [user, setuserData] = useState({
    bio: userRedux.user?.bio,
    userName: userRedux.user?.userName,
    pronounce: userRedux.user?.pronounce,
    profilePhoto: userRedux.user?.profilePhoto ,
    //profileUploadS3Url: userRedux.user?.profileUploadS3Url,
  });

  const updateUserDataLocal = (key: string, value: string | object) => {
    setuserData(v => ({ ...v, [key]: value }));
  };

  const updateUserPassport = () => {
    Users.updateUser(user).then(
      data => {
        Toast.show({
          autoHide: true,
          text1: t('editPassportScreen.success'),
          text2: t('editPassportScreen.passportUpdated'),
          type: 'success',
        });
        dispatch(updateUserData({...userRedux.user, 
           bio: user.bio,
          userName: user.userName,
          pronounce: user.pronounce,
          profilePhoto: user.profilePhoto  })); 
        onClose();
      },
      err => {
        Toast.show({
          autoHide: true,
          text1: t('editPassportScreen.error'),
          type: 'error',
        });
      },
    );
  };

  return (
    <Modal
      visible={show}
      onDismiss={onClose}
      style={styles.settingsModal}
      animationType="fade">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}>
          <ScrollView>
            <CosmicBackground>
              <View style={[ styles.settingsHeader]}>
                <Text size="slg" color={Colors.WHITE} style={styles.headerText}>
                  {t('editPassportScreen.editPassport')}
                </Text>
                <TouchableOpacity hitSlop={{ top: 40, bottom: 40, left: 40, right: 40 }}  style={styles.settingsIcon} onPress={onClose}>
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
                  style={{ marginVertical: 14 }}
                  size={'medium'}></PozLogo>
                <VStack style={styles.editSummary}>
                  <VStack>
                    <Pressable
                      onPress={async () => {
                        const result = await launchImageLibrary({
                          mediaType: 'photo',
                        });
                      
                        if (result.assets) {
                          
                          const uploadedImage = await Uploader.uploadImage(
                            userRedux.user?.profileUploadS3Url?.uploadURL,
                            result.assets[0].uri,
                          );

                          updateUserDataLocal('profilePhoto', uploadedImage.url);
                          dispatch(updateUserData({...userRedux.user,  
                          profilePhoto:  uploadedImage.url  })); 
                        }
                      }}>
                      <WrappedImage
                        style={styles.userImage}
                        source={user.profilePhoto}
                        height={112}
                        width={112}></WrappedImage>

                      <Text style={[styles.editPhotoText, { textTransform: 'none' }]}>
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
                      onChangeText={text => updateUserDataLocal('userName', text)}
                      placeholder={t('editPassportScreen.username')}
                      styleContainer={styles.editInputContainer}
                      size={'full'}
                      value={user.userName}></Input>
                  </VStack>

                  <VStack align="flex-start" style={styles.editModalRow}>
                    <Text style={styles.editText}>
                      {t('editPassportScreen.pronouns')}
                    </Text>
                    <Input
                      blurType={'light'}
                      style={{ color: Colors.DARK_PURPLE }}
                      onChangeText={text => updateUserDataLocal('pronounce', text)}
                      placeholder={t('editPassportScreen.pronouns')}
                      styleContainer={styles.editInputContainer}
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
                      styleContainer={styles.editInputContainer}
                      size="smallxl"
                      value={user.bio}
                      onChangeText={text => updateUserDataLocal('bio', text)}
                    />
                  </VStack>

                  <HStack style={[styles.editModalRow, styles.editButtonContainer]}>
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
            <Toast />
          </ScrollView>
        </KeyboardAvoidingView>
    </Modal>
  );
};

export default EditPassport;
