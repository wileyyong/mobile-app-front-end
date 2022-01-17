import { Button, CosmicBackground, Orbs, Spacer, Text, VStack, HStack, Input } from '$components';
import { Passport, LocationButton, ProfilePhotoButton } from '$widgets';
import { Colors } from '$theme';

import React, { useState } from 'react';
import { Platform } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { connect } from 'react-redux';

import { LocationSheet } from './sections';
import styles from './style';

const PassportScreen = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [pfp, setPfp] = useState(null);
  const [location] = useState('');
  const [showSheet, setShowSheet] = useState(false);

  const platformBlurType = Platform.select({ android: 'dark', ios: 'ultraThinMaterialDark' });

  return (
    <CosmicBackground>
      <Orbs />
      <BlurView blurAmount={50} blurType={platformBlurType} style={styles.blurContainer}>
        <VStack align="flex-start" justify="flex-start">
          <Text color={Colors.WHITE} size="lg" weight="bold">
            Setup Your Passport
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
              placeholder="Username*"
              size="large"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <Input
              placeholder="Pronouns"
              size="small"
              value={pronouns}
              onChangeText={(text) => setPronouns(text)}
            />
          </HStack>
          <Spacer height={10} />
          <Input
            multiline
            placeholder="Bio"
            size="medium"
            value={bio}
            onChangeText={(text) => setBio(text)}
          />
          <Spacer height={10} />

          <Text color={Colors.WHITE} size="xs" style={styles.requiredFieldText}>
            *Required Fields
          </Text>
          <Spacer height={10} />
          <Button backgroundColor={Colors.WHITE}>
            <Text weight="bold">Done</Text>
          </Button>
        </VStack>
      </BlurView>
      <LocationSheet show={showSheet} onClose={() => setShowSheet(false)} />
    </CosmicBackground>
  );
};

export default () => connect()(PassportScreen);
