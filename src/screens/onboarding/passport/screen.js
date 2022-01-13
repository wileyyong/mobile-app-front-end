import { Button, CosmicBackground, Orbs, Spacer, Text, VStack, HStack, Input } from '$components';
import { Passport } from '$widgets';
import { Colors } from '$theme';

import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { connect } from 'react-redux';

import { LocationSheet } from './sections';
import styles from './style';

const PassportScreen = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [showSheet, setShowSheet] = useState(false);

  return (
    <CosmicBackground>
      <Orbs />
      <BlurView blurAmount={50} blurType="ultraThinMaterialDark" style={styles.blurContainer}>
        <VStack align="flex-start" justify="flex-start">
          <Text color={Colors.WHITE} size="lg">
            Setup Your Passport
          </Text>
          <Passport />
          <HStack>
            <Input placeholder="Username" size="large" value={username} onChangeText={(text) => setUsername(text)} />
            <Spacer size={10} />
            <Input placeholder="Pronouns" size="small" value={pronouns} onChangeText={(text) => setPronouns(text)} />
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

export default () => connect()(PassportScreen);
