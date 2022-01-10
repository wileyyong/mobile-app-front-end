import CosmicBackground from '$components/background/CosmicBackground';
import Button from '$components/button/Button';
import Spacer from '$components/stacks/Spacer';
import Text from '$components/text/Text';
import VStack from '$components/stacks/VStack';
import Orbs from '$components/background/Orbs';
import HStack from '$components/stacks/HStack';
import Passport from '$components/onboarding/Passport';

import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import { colors } from '../../../shared/theme/colors';

import LocationSheet from './LocationSheet';
import styles from './style';

const SetupPassport = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [showSheet, setShowSheet] = useState(false);

  return (
    <CosmicBackground>
      <Orbs />
      <BlurView style={styles.blurContainer} blurType="dark" blurAmount={50}>
        <VStack align="flex-start" justify="flex-start">
          <Text size="lg" color={colors.WHITE}>
            Setup Your Passport
          </Text>
          <Passport />
          <HStack>
            <BlurView style={styles.inputBlurSm}>
              <TextInput
                style={styles.input}
                value={username}
                multiline
                placeholder="Username*"
                placeholderTextColor={colors.WHITE}
                onChangeText={(text) => setUsername(text)}
              />
            </BlurView>
            <BlurView style={styles.inputBlurSm}>
              <TextInput
                style={styles.input}
                value={pronouns}
                multiline
                placeholder="Username*"
                placeholderTextColor={colors.WHITE}
                onChangeText={(text) => setPronouns(text)}
              />
            </BlurView>
          </HStack>
          <BlurView style={styles.inputBlur}>
            <TextInput
              style={styles.input}
              value={bio}
              multiline
              placeholder="Bio"
              placeholderTextColor={colors.WHITE}
              onChangeText={(text) => setBio(text)}
            />
          </BlurView>
          <Spacer height={10} />
          <Text color={colors.WHITE}>*Required Fields</Text>
          <Spacer height={10} />
          <Button
            onPress={() => {
              setShowSheet(true);
            }}
            backgroundColor={colors.WHITE}
          >
            <Text>Done</Text>
          </Button>
        </VStack>
      </BlurView>
      <LocationSheet show={showSheet} onClose={() => setShowSheet(false)} />
    </CosmicBackground>
  );
};

export default SetupPassport;
