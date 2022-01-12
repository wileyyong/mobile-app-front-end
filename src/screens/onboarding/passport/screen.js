import CosmicBackground from '$components/background/CosmicBackground';
import Button from '$components/button/Button';
import Spacer from '$components/stacks/Spacer';
import Text from '$components/text/Text';
import VStack from '$components/stacks/VStack';
import Orbs from '$components/background/Orbs';
import HStack from '$components/stacks/HStack';
import Passport from '$components/passport/Passport';
import { Colors } from '$theme';

import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import { LocationSheet } from './sections';
import styles from './style';

const SetupPassport = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [showSheet, setShowSheet] = useState(false);

  return (
    <CosmicBackground>
      <Orbs />
      <BlurView blurAmount={50} blurType="dark" style={styles.blurContainer}>
        <VStack align="flex-start" justify="flex-start">
          <Text color={Colors.WHITE} size="lg">
            Setup Your Passport
          </Text>
          <Passport />
          <HStack>
            <BlurView style={styles.inputBlurSm}>
              <TextInput
                multiline
                placeholder="Username*"
                placeholderTextColor={Colors.WHITE}
                style={styles.input}
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </BlurView>
            <BlurView style={styles.inputBlurSm}>
              <TextInput
                multiline
                placeholder="Username*"
                placeholderTextColor={Colors.WHITE}
                style={styles.input}
                value={pronouns}
                onChangeText={(text) => setPronouns(text)}
              />
            </BlurView>
          </HStack>
          <BlurView style={styles.inputBlur}>
            <TextInput
              multiline
              placeholder="Bio"
              placeholderTextColor={Colors.WHITE}
              style={styles.input}
              value={bio}
              onChangeText={(text) => setBio(text)}
            />
          </BlurView>
          <Spacer height={10} />
          <Text color={Colors.WHITE}>*Required Fields</Text>
          <Spacer height={10} />
          <Button
            backgroundColor={Colors.WHITE}
            onPress={() => {
              setShowSheet(true);
            }}
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
