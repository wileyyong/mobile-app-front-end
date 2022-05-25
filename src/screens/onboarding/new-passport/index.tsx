import {
  Button,
  CosmicBackground,
  Orbs,
  Spacer,
  Text,
  VStack,
  HStack,
  Input,
  BlurView,
} from '$components';
import { Passport, LocationButton, ProfilePhotoButton } from '$widgets';
import { Colors } from '$theme';

import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

import { LocationSheet } from './sections';
import styles from './style';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { convertUtf8ToHex } from '@walletconnect/utils';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from 'src/redux/user/actions';
import { fetchItemFromStorage, loc2address, signMessage } from '$utils';

const PassportScreen = () => {
  const dispatch = useDispatch();
  const connector = useWalletConnect();
  const user = useSelector(state => state.user)
  const { t } = useTranslation();

  const [userData, setuserData] = useState({
    bio: '',
    userName: '',
    pronounce: '',
    profilePhoto: '',
    lat: '',
    long: '',
  });
  const [showSheet, setShowSheet] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);
  const [country, setCountry] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    (async () => {
      const address = user.isNewUser ? await fetchItemFromStorage('address') : connector.accounts[0];
      setAddress(address);
    })();
    return () => { };
  }, [connector, user.isNewUser])

  useEffect(() => {
    const runAsync = async () => {
      try {
        const country = await loc2address(userData.lat, userData.long);
        setCountry(country);
      } catch (error) {
        console.log(error);
      }
    }
    runAsync()
  }, [userData.lat])

  const done = async () => {
    if (!validateForm()) {
      try {
        setloading(true);
        const message = `App name is Pozzle Planet - ${new Date().toUTCString()}`;
        const hexMsg = convertUtf8ToHex(message);
        const msgParams = [hexMsg, address];
        const res = user.isNewUser ? await signMessage(message) : await connector.signPersonalMessage(msgParams);
        const data = {
          signedMsg: {
            message: message,
            signature: res,
          },
          ...userData
        };
        await dispatch(createUser(data));
        setloading(false);
      } catch (error) {
        setloading(false);
        console.log(error)
      }
    }
  };
  const validateForm = (): boolean => {
    return userData.userName == '' ||
      userData.bio == '' ||
      userData.pronounce == '' ||
      userData.profilePhoto == '' ||
      userData.lat == '' ||
      userData.long == ''
  }
  const updateUserData = (key: string, value: string | object) => {
    setuserData(v => ({ ...v, [key]: value }));
  };
  const locationUpdate = (location: any) => {
    updateUserData('lat', location.coords.latitude);
    updateUserData('long', location.coords.longitude);
  };
  const platformBlurType = Platform.select({
    android: 'dark',
    ios: 'ultraThinMaterialDark',
  });

  return (
    <CosmicBackground
      style={{
        justifyContent: 'center',
      }}>
      <Orbs />
      <SafeAreaView style={{ flex: 1 }}>
        <BlurView
          blurAmount={50}
          blurType={platformBlurType}
          style={styles.blurContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack align="flex-start" justify="flex-start">
              <Text
                color={Colors.WHITE}
                size="lg"
                weight="bold"
                textAlign='center'
                style={{ paddingHorizontal: 80, width: '100%' }}
              >
                {t('passportScreen.setupPassport')}
              </Text>
              <Spacer height={10} />
              <Passport
                bio={userData.bio}
                country={country}
                profilePhoto={userData.profilePhoto}
                pronounce={userData.pronounce}
                userName={userData.userName}
                address={address}
              />
              <Spacer height={10} />
              <HStack justify="space-between" style={{ width: '100%' }}>
                <ProfilePhotoButton
                  onSelect={(uri: string) => updateUserData('profilePhoto', uri)}
                />
                <LocationButton onPress={() => setShowSheet(true)} />
              </HStack>
              <Spacer height={10} />
              <HStack justify="space-between" style={{ width: '100%' }}>
                <Input
                  placeholder={`${t('passportScreen.formfield.username')}*`}
                  size="large"
                  value={userData.userName}
                  onChangeText={text => updateUserData('userName', text)}
                />
                <Input
                  placeholder={`${t('passportScreen.formfield.pronounce')}`}
                  size="small"
                  value={userData.pronounce}
                  onChangeText={text => updateUserData('pronounce', text)}
                />
              </HStack>
              <Spacer height={10} />
              <Input
                multiline
                placeholder={t('passportScreen.formfield.bio')}
                size="medium"
                value={userData.bio}
                onChangeText={text => updateUserData('bio', text)}
              />
              <Spacer height={10} />

              <Text
                color={Colors.WHITE}
                size="xs"
                style={styles.requiredFieldText}>
                {t('passportScreen.requiredFields')}
              </Text>
              <Spacer height={10} />
              <Button
                backgroundColor={Colors.LIGHT_PURPLE}
                isLoading={loading}
                onPress={done}>
                <Text
                  color={Colors.WHITE}
                  weight="bold"
                >
                  {t('passportScreen.formfield.done')}
                </Text>
              </Button>
            </VStack>
          </ScrollView>
        </BlurView>
      </SafeAreaView>
      <LocationSheet
        show={showSheet}
        onClose={() => {
          setShowSheet(false);
        }}
        setlocation={loc => {
          locationUpdate(loc);
        }}
      />
    </CosmicBackground>
  );
};

export default PassportScreen;


