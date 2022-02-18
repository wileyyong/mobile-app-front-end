/* eslint-disable no-console */
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
import { useAuth } from '$auth';

import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { convertUtf8ToHex } from '@walletconnect/utils';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

import { loginUser } from '../../../api';

import { LocationSheet } from './sections';
import styles from './style';

const PassportScreen = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [pfp, setPfp] = useState(null);
  const [location] = useState('');
  const [showSheet, setShowSheet] = useState(false);
  const { t } = useTranslation();
  const { setUser } = useAuth();

  const connector = useWalletConnect();

  const platformBlurType = Platform.select({ android: 'dark', ios: 'ultraThinMaterialDark' });

  const onDone = async () => {
    const msg = convertUtf8ToHex('Create Passport');
    const signedMsg = await connector.signPersonalMessage([msg, connector.accounts[0]]);
    const result = await loginUser({
      bio,
      location,
      pfp,
      pronouns,
      signedMsg,
      username,
    });

    if (!result) return;
    setUser({
      bio,
      location,
      pfp,
      pronouns,
      signedMsg,
      username,
    });
  };

  return (
    <CosmicBackground>
      <Orbs />
      <BlurView blurAmount={50} blurType={platformBlurType} style={styles.blurContainer}>
        <VStack align="flex-start" justify="flex-start">
          <Text color={Colors.WHITE} size="lg" weight="bold">
            {t('passportScreen.setupPassport')}
          </Text>
          <Spacer height={10} />
          <Passport
            bio={bio}
            location={location}
            pfp={pfp}
            pronouns={pronouns}
            username={username}
          />
          <Spacer height={10} />
          <HStack justify="space-between" style={{ width: '100%' }}>
            <ProfilePhotoButton onSelect={setPfp} />
            <LocationButton onPress={() => setShowSheet(true)} />
          </HStack>
          <Spacer height={10} />
          <HStack justify="space-between" style={{ width: '100%' }}>
            <Input
              placeholder={`${t('passportScreen.formfield.username')}*`}
              size="large"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <Input
              placeholder={`${t('passportScreen.formfield.pronouns')}`}
              size="small"
              value={pronouns}
              onChangeText={(text) => setPronouns(text)}
            />
          </HStack>
          <Spacer height={10} />
          <Input
            multiline
            placeholder={t('passportScreen.formfield.bio')}
            size="medium"
            value={bio}
            onChangeText={(text) => setBio(text)}
          />
          <Spacer height={10} />

          <Text color={Colors.WHITE} size="xs" style={styles.requiredFieldText}>
            *Required Fields
          </Text>
          <Spacer height={10} />
          <Button backgroundColor={Colors.WHITE} onPress={onDone}>
            <Text weight="bold">{t('passportScreen.formfield.done')}</Text>
          </Button>
        </VStack>
      </BlurView>
      <LocationSheet show={showSheet} onClose={() => setShowSheet(false)} />
    </CosmicBackground>
  );
};

export default PassportScreen;
