import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import { colors } from '../../shared/theme/colors';
import CosmicBackground from '../../shared/components/background/CosmicBackground';
import Button from '../../shared/components/button/Button';
import Spacer from '../../shared/components/stacks/Spacer';
import Text from '../../shared/components/text/Text';
import VStack from '../../shared/components/stacks/VStack';
import Orbs from '../../shared/components/background/Orbs';
import HStack from '../../shared/components/stacks/HStack';
import Passport from '../../shared/components/onboarding/Passport';

import LocationSheet from './LocationSheet';

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
          <Text size="lg" color={colors.white}>
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
                placeholderTextColor={colors.white}
                onChangeText={(text) => setUsername(text)}
              />
            </BlurView>
            <BlurView style={styles.inputBlurSm}>
              <TextInput
                style={styles.input}
                value={pronouns}
                multiline
                placeholder="Username*"
                placeholderTextColor={colors.white}
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
              placeholderTextColor={colors.white}
              onChangeText={(text) => setBio(text)}
            />
          </BlurView>
          <Spacer height={10} />
          <Text color={colors.white}>*Required Fields</Text>
          <Spacer height={10} />
          <Button
            onPress={() => {
              setShowSheet(true);
            }}
            backgroundColor={colors.white}
          >
            <Text>Done</Text>
          </Button>
        </VStack>
      </BlurView>
      <LocationSheet show={showSheet} onClose={() => setShowSheet(false)} />
    </CosmicBackground>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  inputBlur: {
    width: '100%',
    height: 100,
    padding: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  inputBlurSm: {
    height: 50,
    borderRadius: 15,
    overflow: 'hidden',
  },
  input: {
    color: colors.white,
  },
});

export default SetupPassport;
