import { Image, View } from 'react-native';
import React, {
  useRef,
  useMemo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Button, Spacer, Text, VStack, CustomBackdrop } from '$components';
import { Colors } from '$theme';
import styles from './style';
import { useTranslation } from 'react-i18next';
import { fetchItemFromStorage } from '$utils';

const copyIcon = require('src/assets/images/copy.png');

interface IProps {
  onButtonPress: () => void;
}

export default function BackupWallet({ onButtonPress }: IProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [mnemonic, setMnemonic] = useState<Array<string>>([]);

  const snapPoints = useMemo(() => ['25%', '70%'], []);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  const { t } = useTranslation();

  const getSecretPhrase = async () => {
    const secretPhrase = await fetchItemFromStorage('mnemonic');
    // The secretPhrase is a string with the mnemonic words separated by spaces, so we are separating them and pushing it into an array
    const secretPhraseArray = secretPhrase.split(' ');
    setMnemonic(secretPhraseArray);
  };
  useEffect(() => {
    getSecretPhrase();
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      backdropComponent={CustomBackdrop}
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
            {t('BackupWallet.title')}
          </Text>
          <Spacer height={20} />
          <Text
            size="xs"
            style={styles.text}
            color={Colors.SEVENTYPERCENTPURPLE}>
            {t('BackupWallet.description')}
          </Text>
          <Spacer height={20} />
          <View style={styles.container}>
            {mnemonic.map((word, index) => (
              <View style={styles.wordContainer}>
                <Text color={Colors.LIGHT_PURPLE} style={styles.word}>
                  {index + 1}
                </Text>
                <Text
                  color={Colors.DARK_PURPLE}
                  style={{
                    fontWeight: 'bold',
                  }}>
                  {word}
                </Text>
              </View>
            ))}
          </View>

          <Spacer height={20} />
          <Button
            size="large"
            onPress={onButtonPress}
            backgroundColor={Colors.LIGHT_PURPLE}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={copyIcon} />
              <Text
                color={Colors.WHITE}
                style={{
                  marginLeft: 10,
                }}
                weight="bold"
                translationKey={'BackupWallet.copy'}
              />
            </View>
          </Button>
          <Spacer height={20} />
          <Text
            size="xs"
            style={styles.text}
            color={Colors.SEVENTYPERCENTPURPLE}>
            {t('BackupWallet.description2')}
          </Text>
          <Spacer height={40} />
          <Button onPress={onButtonPress} backgroundColor={Colors.LIGHT_PURPLE}>
            <Text
              color={Colors.WHITE}
              weight="bold"
              translationKey={'BackupWallet.BackUpNow'}
            />
          </Button>
          <Spacer height={20} />
        </VStack>
      </View>
    </BottomSheet>
  );
}
