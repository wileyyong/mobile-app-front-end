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

function CompletedOnboarding({ route }: any) {
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
    setLoading(true);

    const message = `App name is Pozzle Planet - ${new Date().toUTCString()}`;

    const hexMsg = convertUtf8ToHex(message);

    const msgParams = [hexMsg, address];

    const res = user.isNewUser
      ? await signMessage(message)
      : await connector.signPersonalMessage(msgParams);

    const data = {
      signedMsg: {
        message: message,
        signature: res,
      },
      ...userData,
    };

    console.log('data =>', data);

    await dispatch(createUser(data));
    setLoading(false);
    navigation.navigate('Explorer', {
      screen: 'Home',
      params: {
        showBackUpModal: user.isNewUser,
      },
    });
  };

  useEffect(() => {
    (async () => {
      const address = user.isNewUser
        ? await fetchItemFromStorage('address')
        : connector.accounts[0];
      let userData = route.params.userData;

      console.log('User Data', userData);
      setAddress(address);
      setuserData({
        bio: userData?.bio,
        userName: userData?.name,
        pronounce: userData?.pronoun,
        profilePhoto: userData?.picture,
        lat: userData?.lat || 0,
        long: userData?.lng || 0,
      });
      console.log('dasd', userData);
    })();
    return () => {};
  }, [connector, user.isNewUser]);

  return (
    <SkyBackground style={styles.container}>
      <TouchableOpacity
        style={styles.arrowLeft}
        hitSlop={{ top: 10, left: 15, bottom: 10, right: 25 }}
        onPress={() => goBack()}>
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
        <Text style={styles.title} size="2md" color={Colors.WHITE}>
          {t('onBoardingScreen.completed.title')}
        </Text>
        <Spacer height={20} />
        <Text
          style={{
            fontWeight: 'bold',
          }}
          size="sm"
          color={Colors.GRAY2}>
          {t('onBoardingScreen.completed.subtitle')}
        </Text>
        <Spacer height={240} />
        <Button
          isLoading={false}
          onPress={handleSubmit}
          backgroundColor={Colors.LIGHT_PURPLE}>
          <Text
            color={Colors.WHITE}
            weight="bold"
            translationKey="onBoardingScreen.completed.button"
          />
        </Button>
        <Spacer height={70} />
      </VStack>
    </SkyBackground>
  );
}

export default CompletedOnboarding;
