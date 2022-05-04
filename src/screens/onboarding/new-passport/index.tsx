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
  Modal,
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
import { useDispatch } from 'react-redux';
import { createUser } from 'src/redux/user/actions';

const PassportScreen = () => {
  const dispatch = useDispatch();
  const connector = useWalletConnect();
  const [signatureObject, setsignature] = useState({
    signedMessage: '',
    signature: '',
  });
  const getSignature = async (): Promise<string | void> => {
    const message = `App name is Pozzle Planet - ${new Date().toUTCString()}`;
    const hexMsg = convertUtf8ToHex(message);
    const msgParams = [hexMsg, connector.accounts[0]];
    const result = await connector.signPersonalMessage(msgParams);
    setsignature({
      signedMessage: message,
      signature: result,
    });
  };
  const validateForm = (): boolean => {
    return userData.username == '' ||
      userData.bio == '' ||
      userData.pronouns == '' ||
      userData.pfp == '' ||
      userData.location.latitude == '' ||
      userData.location.longitude == ''
  }
  const done = async () => {
    if (!validateForm()) {
      setloading(true);
      await getSignature();
      await authenticate();
      setloading(false);
    }
  }
  const [userData, setuserData] = useState({
    username: '',
    bio: '',
    pronouns: '',
    pfp: '',
    location: { longitude: '', latitude: '' },
  });

  const updateUserData = (key: string, value: string | object) => {
    setuserData(v => ({ ...v, [key]: value }));
  };

  const [showSheet, setShowSheet] = useState(false);
  const [showAddress, setShowAddress] = useState<boolean>(false);
  const [loading, setloading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setShowAddress(true);
    }, 3000);
  }, [])

  const locationUpdate = (location: any) => {
    updateUserData('location', {
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });
  };

  const platformBlurType = Platform.select({
    android: 'dark',
    ios: 'ultraThinMaterialDark',
  });

  const authenticate = async () => {
    const data = {
      signedMsg: {
        message: signatureObject.signedMessage,
        signature: signatureObject.signature,
      },
      bio: userData.bio,
      userName: userData.username,
      pronounce: userData.pronouns,
      lat: parseInt(userData.location.latitude),
      long: parseInt(userData.location.longitude),
      profilePhoto: userData.pfp,
    };
    await dispatch(createUser(data));
  };

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
              <Text color={Colors.WHITE} size="lg" weight="bold">
                {t('passportScreen.setupPassport')}
              </Text>
              <Spacer height={10} />
              <Passport
                bio={userData.bio}
                location={userData.location}
                pfp={userData.pfp}
                pronouns={userData.pronouns}
                username={userData.username}
              />
              <Spacer height={10} />
              <HStack justify="space-between" style={{ width: '100%' }}>
                <ProfilePhotoButton
                  onSelect={(uri: string) => updateUserData('pfp', uri)}
                />
                <LocationButton onPress={() => setShowSheet(true)} />
              </HStack>
              <Spacer height={10} />
              <HStack justify="space-between" style={{ width: '100%' }}>
                <Input
                  placeholder={`${t('passportScreen.formfield.username')}*`}
                  size="large"
                  value={userData.username}
                  onChangeText={text => updateUserData('username', text)}
                />
                <Input
                  placeholder={`${t('passportScreen.formfield.pronouns')}`}
                  size="small"
                  value={userData.pronouns}
                  onChangeText={text => updateUserData('pronouns', text)}
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
                backgroundColor={Colors.WHITE}
                isLoading={loading}
                onPress={done}>
                <Text weight="bold">{t('passportScreen.formfield.done')}</Text>
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
      <Modal
        icon='setting'
        title='address'
        snapPoints={['30%']}
        show={showAddress}
        onClose={() => setShowAddress(false)}
      >
        <Text>
          {connector.accounts[0]}
        </Text>
      </Modal>
    </CosmicBackground>
  );
};

export default PassportScreen;
