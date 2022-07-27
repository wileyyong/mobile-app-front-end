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

function PictureScreen({ route }: any) {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [imageURI, setImageURI] = useState<string | null>(null);

  const goBack = () => {
    navigation.goBack();
  };

  const handleSubmit = async () => {
    let userData = route.params.userData;
    userData.picture = imageURI;
    navigation.navigate(BIO_SCREEN, {
      userData,
    });
  };

  const handleSkip = async () => {
    let userData = route.params.userData;
    userData.picture = `https://ui-avatars.com/api/?background=875CFF&color=fff&size=512&name=${userData.name}`;

    navigation.navigate(BIO_SCREEN, {
      userData,
    });
  };

  const PickImage = async () => {
    try {
      const result = await launchImageLibrary();
      setImageURI(result.assets[0].uri);
    } catch {}
  };

  return (
    <SkyBackground style={styles.container}>
      <TouchableOpacity
        hitSlop={{ top: 10, left: 15, bottom: 10, right: 25 }}
        style={styles.arrowLeft}
        onPress={goBack}>
        <ArrowLeft color={Colors.WHITE} />
      </TouchableOpacity>
      <VStack style={styles.content}>
        <Spacer height={220} />
        <View>
          <Text
            style={styles.title}
            family={'title'}
            size="2md"
            color={Colors.WHITE}>
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
          <TouchableOpacity onPress={() => handleSkip()}>
            <Text
              style={{
                fontWeight: 'bold',
              }}
              size="sm"
              color={Colors.GRAY2}>
              {t('onBoardingScreen.skip')}
            </Text>
          </TouchableOpacity>
        )}
        <Spacer height={70} />
      </VStack>
    </SkyBackground>
  );
}

export default PictureScreen;
