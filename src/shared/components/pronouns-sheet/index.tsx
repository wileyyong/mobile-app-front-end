import { Image, View } from 'react-native';
import React, { useRef, useMemo, useState, useCallback } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Button, Spacer, Text, VStack, HStack } from '$components';
import { Colors } from '$theme';
import styles from './style';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import { useTranslation } from 'react-i18next';
const pozLogo = require('src/assets/images/check.png');

interface IProps {
  onContinueButtonPress: () => void;
}

export default function SuccessWalletSheet({ onContinueButtonPress }: IProps) {
  const [firstPronoun, setFirstPronoun] = useState<string>('');
  const [secondPronoun, setSecondPronoun] = useState<string>('');
  const [thirdPronoun, setThirdPronoun] = useState<string>('');
  const [fourthPronoun, setFourthPronoun] = useState<string>('');
  const { t } = useTranslation();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['40%', '40%'], []);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  const pronouns = [
    '',
    t('onBoardingScreen.pronouns.she'),
    t('onBoardingScreen.pronouns.her'),
    t('onBoardingScreen.pronouns.hers'),
    t('onBoardingScreen.pronouns.he'),
    t('onBoardingScreen.pronouns.him'),
    t('onBoardingScreen.pronouns.his'),
    t('onBoardingScreen.pronouns.they'),
    t('onBoardingScreen.pronouns.them'),
    t('onBoardingScreen.pronouns.theirs'),
  ];

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      handleComponent={() => null}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <View style={styles.content}>
        <VStack>
          <Spacer height={20} />
          <Text
            size="2md"
            style={{
              fontWeight: 'bold',
            }}
            color={Colors.DARK_PURPLE}>
            {t('onBoardingScreen.name.pronounTitle')}
          </Text>
          <Spacer height={20} />
          <View style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginLeft: '30%',
              }}>
              <ScrollPicker
                dataSource={pronouns}
                selectedIndex={0}
                renderItem={(data, index, isSelected) => {
                  <Text>{data}</Text>;
                }}
                onValueChange={(data, selectedIndex) => {
                  setFirstPronoun(data);
                }}
                wrapperBackground={'#FFFFFF'}
                itemHeight={50}
                highlightColor={'#B4B4B7'}
                highlightBorderWidth={1}
                activeItemColor={'#000'}
                itemColor={'##AEAEB2'}
              />
              <ScrollPicker
                dataSource={pronouns}
                selectedIndex={0}
                renderItem={(data, index, isSelected) => {
                  <Text>{data}</Text>;
                }}
                onValueChange={(data, selectedIndex) => {
                  setSecondPronoun(data);
                }}
                wrapperBackground={'#FFFFFF'}
                itemHeight={50}
                highlightColor={'#B4B4B7'}
                highlightBorderWidth={1}
                activeItemColor={'#000'}
                itemColor={'##AEAEB2'}
              />
              <ScrollPicker
                dataSource={pronouns}
                selectedIndex={0}
                renderItem={(data, index, isSelected) => {
                  <Text>{data}</Text>;
                }}
                onValueChange={(data, selectedIndex) => {
                  setThirdPronoun(data);
                }}
                wrapperBackground={'#FFFFFF'}
                itemHeight={50}
                highlightColor={'#B4B4B7'}
                highlightBorderWidth={1}
                activeItemColor={'#000'}
                itemColor={'##AEAEB2'}
              />
              <ScrollPicker
                dataSource={pronouns}
                selectedIndex={0}
                renderItem={(data, index, isSelected) => {
                  <Text>{data}</Text>;
                }}
                onValueChange={(data, selectedIndex) => {
                  setFourthPronoun(data);
                }}
                wrapperBackground={'#FFFFFF'}
                itemHeight={50}
                highlightColor={'#B4B4B7'}
                highlightBorderWidth={1}
                activeItemColor={'#000'}
                itemColor={'##AEAEB2'}
              />
            </View>
          </View>

          <Spacer height={35} />
          <Button
            onPress={() => {
              onContinueButtonPress(
                firstPronoun,
                secondPronoun,
                thirdPronoun,
                fourthPronoun,
              );
            }}
            isLoading={false}
            backgroundColor={Colors.LIGHT_PURPLE}>
            <Text
              color={Colors.WHITE}
              weight="bold"
              translationKey={'onBoardingScreen.name.contiueButton'}
            />
          </Button>
          <Spacer height={20} />
        </VStack>
      </View>
    </BottomSheet>
  );
}
