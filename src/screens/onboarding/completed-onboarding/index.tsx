import {
  ASYNC_STORAGE_LOCATION_KEY,
  BIO_SCREEN,
  DISCOVERY_SCREEN,
} from '$constants';
import {
  ArrowLeft,
  Button,
  PhotosIcon,
  SkyBackground,
  Spacer,
  Text,
  VStack,
} from '$components';
import { Colors } from '$theme';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style';
import { fetchItemFromStorage, signMessage } from '$utils';
import { convertUtf8ToHex } from '@walletconnect/utils';
import { Uploader } from '$api';
import { createUser } from 'src/redux/user/actions';
import { useTranslation } from 'react-i18next';

type userData = {
  bio: string;
  userName: string;
  pronounce: string;
  profilePhoto: string;
  lat: string;
  long: string;
};

function CompletedOnboarding() {
  const connector = useWalletConnect();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const user = useSelector(state => state.user);

  const [address, setAddress] = useState<string | undefined | null>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setuserData] = useState({
    bio: '',
    userName: '',
    pronounce: '',
    profilePhoto: '',
    lat: '',
    long: '',
  });

  const goBack = () => {
    navigation.goBack();
  };

  const handleSubmit = async () => {
    let signature = await fetchItemFromStorage('WalletSignature');

    const data = {
      signedMsg: JSON.parse(signature),
      ...userData,
    };
    console.log(data);
    await dispatch(createUser(data));
    await Uploader.uploadImage(
      user.user.profileUploadS3Url.uploadURL,
      userData.profilePhoto,
    );
    navigation.navigate('Explorer', {
      screen: 'Home',
      params: {
        showBackUpModal: user.isNewUser,
      },
    });
    console.log('DONE', user);
  };

  useEffect(() => {
    (async () => {
      const address = user.isNewUser
        ? await fetchItemFromStorage('address')
        : connector.accounts[0];
      let userData = (await fetchItemFromStorage('user')) as any;
      let userLocation = (await fetchItemFromStorage(
        ASYNC_STORAGE_LOCATION_KEY,
      )) as any;
      let JSONLocation = JSON.parse(userLocation);
      userData = JSON.parse(userData);
      console.log(address);
      setAddress(address);
      setuserData({
        bio: userData.bio,
        userName: userData.name,
        pronounce: userData.pronounce,
        profilePhoto: userData.picture,
        lat: JSONLocation.latitude,
        long: JSONLocation.longitude,
      });
    })();
    return () => {};
  }, [connector, user.isNewUser]);

  return (
    <SkyBackground style={styles.container}>
      <TouchableOpacity style={styles.arrowLeft} onPress={() => goBack()}>
        <ArrowLeft color={Colors.WHITE} />
      </TouchableOpacity>
      <VStack style={styles.content}>
        <Spacer height={240} />
        <Image
          source={{
            uri: userData?.profilePhoto,
          }}
          style={styles.image}
        />
        <Spacer height={20} />
        <Text style={styles.title} size="lg" color={Colors.WHITE}>
          {t('completed.title')}
        </Text>
        <Spacer height={20} />
        <Text
          style={{
            fontWeight: 'bold',
          }}
          size="sm"
          color={Colors.GRAY2}>
          {t('completed.subtitle')}
        </Text>
        <Spacer height={240} />
        <Button
          isLoading={false}
          onPress={handleSubmit}
          backgroundColor={Colors.LIGHT_PURPLE}>
          <Text
            color={Colors.WHITE}
            weight="bold"
            translationKey="completed.button"
          />
        </Button>
        <Spacer height={70} />
      </VStack>
    </SkyBackground>
  );
}

export default CompletedOnboarding;
