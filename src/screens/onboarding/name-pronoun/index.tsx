import { PICTURE_SCREEN } from '$constants';
import {
  ArrowLeft,
  Button,
  Input,
  SkyBackground,
  Spacer,
  Text,
  VStack,
  PronounsBottomSheet,
} from '$components';
import { Colors } from '$theme';
import React, { useState } from 'react';
import {
  Keyboard,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { setItemToStorage } from '$utils';
import { useTranslation } from 'react-i18next';

function NameScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [userName, setUserName] = useState<string>('');
  const [pronounce, setPronounce] = useState<string>('');
  const [isPronounceOpen, setIsPronounceOpen] = useState<boolean>(false);

  const goBack = () => {
    navigation.goBack();
  };

  const handleSubmit = async () => {
    let user = {
      name: userName,
      pronounce: pronounce,
    };
    setItemToStorage('user', JSON.stringify(user));
    navigation.navigate(PICTURE_SCREEN);
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        <SkyBackground style={styles.container}>
          <TouchableOpacity style={styles.arrowLeft} onPress={() => goBack()}>
            <ArrowLeft color={Colors.WHITE} />
          </TouchableOpacity>
          <VStack style={styles.content}>
            <Spacer height={150} />
            <View>
              <Text style={styles.title} size="2md" color={Colors.WHITE}>
                {t('onBoardingScreen.name.greeting')}
              </Text>
              <Spacer height={20} />
              <Text style={styles.title} size="2md" color={Colors.WHITE}>
                {t('onBoardingScreen.name.getStarted')}
              </Text>
              <Spacer height={20} />
              <Text style={styles.title} size="2md" color={Colors.WHITE}>
                {t('onBoardingScreen.name.prompt')}
              </Text>
            </View>
            <Spacer height={40} />
            <Input
              value={userName}
              onChangeText={text => setUserName(text)}
              placeholder={t('onBoardingScreen.name.placeholder1')}
              styleContainer={styles.InputContainer}
            />
            <Spacer height={20} />
            <Pressable
              onPress={() => {
                Keyboard.dismiss();
                setTimeout(() => {
                  setIsPronounceOpen(true);
                }, 100);
              }}>
              <View pointerEvents="none">
                <Input
                  value={pronounce}
                  editable={false}
                  onChangeText={text => setPronounce(text)}
                  placeholder={t('onBoardingScreen.name.placeholder2')}
                  styleContainer={styles.InputContainer}
                />
              </View>
            </Pressable>
            <Spacer height={150} />
            <Button
              isLoading={false}
              disabled={!userName && !pronounce}
              onPress={handleSubmit}
              backgroundColor={Colors.LIGHT_PURPLE}>
              <Text
                color={Colors.WHITE}
                weight="bold"
                translationKey="onBoardingScreen.NextButtonText"
              />
            </Button>
            <Spacer height={70} />
          </VStack>
        </SkyBackground>
      </ScrollView>
      {isPronounceOpen && (
        <PronounsBottomSheet
          onContinueButtonPress={(
            firstPronoun,
            secondPronoun,
            thirdPronoun,
            fourthPronoun,
          ) => {
            let pronoun = `${firstPronoun} / ${secondPronoun} / ${thirdPronoun} / ${fourthPronoun}`;
            setPronounce(pronoun);
            setIsPronounceOpen(false);
          }}
        />
      )}
    </>
  );
}

export default NameScreen;
