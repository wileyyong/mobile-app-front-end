import { Image, View } from 'react-native';
import React, { useRef, useMemo, useState, useCallback } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Button, Spacer, Text, VStack, HStack } from '$components';
import { Colors } from '$theme';
import styles from './style';
import { WheelPicker } from 'react-native-wheel-picker-android';
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
    'She',
    'Her',
    'Hers',
    'He',
    'Him',
    'His',
    'They',
    'Them',
    'Theirs',
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
          <Spacer height={25} />
          <View style={styles.container}>
            <View style={{ width: '25%' }}>
              <WheelPicker
                selectedItem={0}
                indicatorColor="#B5B5B7"
                data={pronouns}
                onItemSelected={item => setFirstPronoun(item)}
              />
            </View>
            <View style={{ width: '25%' }}>
              <WheelPicker
                selectedItem={0}
                indicatorColor="#B5B5B7"
                data={pronouns}
                onItemSelected={item => setSecondPronoun(item)}
              />
            </View>
            <View style={{ width: '25%' }}>
              <WheelPicker
                selectedItem={0}
                indicatorColor="#B5B5B7"
                data={pronouns}
                onItemSelected={item => setThirdPronoun(item)}
              />
            </View>
            <View style={{ width: '25%' }}>
              <WheelPicker
                selectedItem={0}
                indicatorColor="#B5B5B7"
                data={pronouns}
                onItemSelected={item => setFourthPronoun(item)}
              />
            </View>
          </View>
          <Spacer height={35} />
          <Button
            onPress={() =>
              onContinueButtonPress(
                pronouns[firstPronoun],
                pronouns[secondPronoun],
                pronouns[thirdPronoun],
                pronouns[fourthPronoun],
              )
            }
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
