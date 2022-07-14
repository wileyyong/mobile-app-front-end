import { LOCATION_SCREEN } from '$constants';
import {
  ArrowLeft,
  Button,
  Input,
  PhotosIcon,
  SkyBackground,
  Spacer,
  Text,
  VStack,
} from '$components';
import { Colors } from '$theme';
import React, { useState } from 'react';
import { TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import { fetchItemFromStorage, setItemToStorage } from '$utils';
import { useTranslation } from 'react-i18next';

function BioScreen({ route }: any) {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [bio, setBio] = useState<string>('');

  const goBack = () => {
    navigation.goBack();
  };

  const handleSubmit = async () => {
    let userData = route.params.userData;
    userData.bio = bio;
    navigation.navigate(LOCATION_SCREEN, {
      userData,
    });
  };

  const handleSkip = async () => {
    let userData = route.params.userData;
    userData.bio = 'N/A';
    navigation.navigate(LOCATION_SCREEN, {
      userData,
    });
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled">
      <SkyBackground style={styles.container}>
        <TouchableOpacity
          style={styles.arrowLeft}
          hitSlop={{ top: 10, left: 15, bottom: 10, right: 25 }}
          onPress={() => goBack()}>
          <ArrowLeft color={Colors.WHITE} />
        </TouchableOpacity>
        <VStack style={styles.content}>
          <Spacer height={170} />
          <View>
            <Text style={styles.title} size="2md" color={Colors.WHITE}>
              {t('onBoardingScreen.bio.title')}
            </Text>
          </View>
          <Spacer height={59} />
          <Input
            placeholder={t('onBoardingScreen.bio.placeholder')}
            styleContainer={styles.InputContainer}
            multiline={true}
            value={bio}
            onChangeText={text => setBio(text)}
          />
          <Spacer height={170} />
          <Button
            disabled={!bio}
            onPress={() => {
              handleSubmit();
            }}
            backgroundColor={Colors.LIGHT_PURPLE}>
            <Text
              color={Colors.WHITE}
              weight="bold"
              translationKey="onBoardingScreen.NextButtonText"
            />
          </Button>
          <Spacer height={20} />
          <Text
            style={{
              fontWeight: 'bold',
            }}
            onPress={handleSkip}
            size="sm"
            color={Colors.GRAY2}>
            {t('onBoardingScreen.skip')}
          </Text>
        </View>
        <Spacer height={59} />
        <Input
          placeholder={t('onBoardingScreen.bio.placeholder')}
          styleContainer={styles.InputContainer}
          multiline={true}
          value={bio}
          onChangeText={text => setBio(text)}
        />
        <Spacer height={150} />
        <Button
          disabled={!bio}
          onPress={() => {
            handleSubmit();
          }}
          backgroundColor={Colors.LIGHT_PURPLE}>
          <Text
            color={Colors.WHITE}
            weight="bold"
            translationKey="onBoardingScreen.NextButtonText"
          />
          <Spacer height={170} />
          <Button
            disabled={!bio}
            onPress={() => {
              handleSubmit();
            }}
            backgroundColor={Colors.LIGHT_PURPLE}>
            <Text
              color={Colors.WHITE}
              weight="bold"
              translationKey="onBoardingScreen.NextButtonText"
            />
          </Button>
          <Spacer height={20} />
          <Text
            style={{
              fontWeight: 'bold',
            }}
            onPress={() => {
              navigation.navigate(LOCATION_SCREEN);
            }}
            size="sm"
            color={Colors.GRAY2}>
            {t('onBoardingScreen.skip')}
          </Text>
          <Spacer height={70} />
        </VStack>
      </SkyBackground>
    </ScrollView>
  );
}

export default BioScreen;
