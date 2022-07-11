import { BIO_SCREEN } from '$constants';
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
import React, { useState } from 'react';
import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchItemFromStorage, setItemToStorage } from '$utils';
import { useTranslation } from 'react-i18next';

function PictureScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [imageURI, setImageURI] = useState<string | null>(null);

  const goBack = () => {
    navigation.goBack();
  };

  const handleSubmit = async () => {
    let userData = (await fetchItemFromStorage('user')) as any;
    let user = JSON.parse(userData);
    user.picture = imageURI;
    await setItemToStorage('user', JSON.stringify(user));
    navigation.navigate(BIO_SCREEN);
  };

  const handleSkip = async () => {
    let userData = (await fetchItemFromStorage('user')) as any;
    let user = JSON.parse(userData);
    user.picture = `https://ui-avatars.com/api/?background=875CFF&color=fff&size=512&name=${user.name}`;
    await setItemToStorage('user', JSON.stringify(user));
    console.log(user);
    navigation.navigate(BIO_SCREEN);
  };

  const PickImage = async () => {
    try {
      const result = await launchImageLibrary();
      setImageURI(result.assets[0].uri);
    } catch {
      console.log('error');
    }
  };

  return (
    <SkyBackground style={styles.container}>
      <TouchableOpacity style={styles.arrowLeft} onPress={() => goBack()}>
        <ArrowLeft color={Colors.WHITE} />
      </TouchableOpacity>
      <VStack style={styles.content}>
        <Spacer height={220} />
        <View>
          <Text style={styles.title} size="2md" color={Colors.WHITE}>
            {t('onBoardingScreen.picture.title')}
          </Text>
        </View>
        <Spacer height={60} />
        {imageURI ? (
          <Pressable onPress={PickImage}>
            <Image
              source={{
                uri: imageURI,
              }}
              style={styles.image}
            />
          </Pressable>
        ) : (
          <TouchableOpacity onPress={PickImage} style={styles.profileContainer}>
            <PhotosIcon color={Colors.WHITE} size="xlarge" />
          </TouchableOpacity>
        )}
        <Spacer height={20} />
        <Text
          style={{
            fontWeight: 'bold',
          }}
          size="sm"
          color={Colors.WHITE}>
          {imageURI
            ? t('onBoardingScreen.picture.change')
            : t('onBoardingScreen.picture.upload')}{' '}
          {t('onBoardingScreen.picture.photo')}
        </Text>
        <Spacer height={200} />
        <Button
          disabled={!imageURI}
          onPress={handleSubmit}
          backgroundColor={Colors.LIGHT_PURPLE}>
          <Text
            color={Colors.WHITE}
            weight="bold"
            translationKey="onBoardingScreen.NextButtonText"
          />
        </Button>
        <Spacer height={imageURI ? 0 : 20} />
        {!imageURI && (
          <Text
            style={{
              fontWeight: 'bold',
            }}
            size="sm"
            onPress={handleSkip}
            color={Colors.GRAY2}>
            {t('onBoardingScreen.skip')}
          </Text>
        )}
        <Spacer height={70} />
      </VStack>
    </SkyBackground>
  );
}

export default PictureScreen;
