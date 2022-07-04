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
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../style';
import { Uploader, Users } from '$api';
import { setSignInUser } from 'src/redux/user/actions';

interface IEditPassportSheet {
  onClose: () => void;
  show: boolean;
}
const pozzlePilot = require('src/assets/images/pozzlePilot.png');
const EditPassport = ({ show, onClose }: IEditPassportSheet) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const userRedux = useSelector(state => state.user);
  console.log('userRedux', userRedux);
  const [user, setuserData] = useState({
    bio: userRedux.user.bio,
    userName: userRedux.user.userName,
    pronounce: userRedux.user.pronounce,
    profilePhoto: userRedux.user.profilePhoto,
    lat: 0,
    long: 0,
    profileUploadS3Url: userRedux.user.profileUploadS3Url
  });

  const updateUserData = (key: string, value: string | object) => {
    setuserData(v => ({ ...v, [key]: value }));
  };

  const updateUserPassport = () => {
    // This needs to be done once we integrate the PZ-69 on main
    console.log('user', user);
    Users.updateUser(user).then(
      data => {
        console.log('data', data);
        Toast.show({
          autoHide: true,
          text1: t('editPassportScreen.success'),
          text2: t('editPassportScreen.passportUpdated'),
          type: 'success',
        });
        setuserData(data.data)
        //dispatch(setSignInUser(data.data));
      },
      err => {
        console.log('err', err);
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
      <ScrollView>
        <CosmicBackground>
          <View style={[styles.iconsView, styles.settingsHeader]}>
            <Text size="lg" color={Colors.WHITE} style={styles.headerText} >
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
                    const result = await launchImageLibrary({
                      mediaType: 'photo',
                    });
                    console.log('result', result);
                    if (result.assets) {
                      console.log('result.assets[0].uri', result.assets[0].uri);
                      await Uploader.uploadImage(user.profileUploadS3Url.uploadURL, result.assets[0].uri)
                      updateUserData('profilePhoto', result.assets[0].uri);
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
                  styleContainer={styles.editInputContainer}
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
        <Toast />
      </ScrollView>
    </Modal>
  );
};

export default EditPassport;
