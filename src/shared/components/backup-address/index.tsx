import {
  Button,
  CopyIcon,
  CustomBackdrop,
  Spacer,
  Text,
  Toast,
  VStack,
  WalletAddressIcon,
} from '$components';
import { Colors } from '$theme';
import { fetchItemFromStorage, getEllipsisTxt } from '$utils';
import BottomSheet from '@gorhom/bottom-sheet';
import Clipboard from '@react-native-clipboard/clipboard';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import styles from './style';

interface IProps {
  onCloseButtonPress: () => void;
  onRevealSecretButtonPress: () => void;
}

function BackupAddress({
  onCloseButtonPress,
  onRevealSecretButtonPress,
}: IProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['45%', '45%'], []);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  const [address, setAddress] = useState<string  | undefined>('');
  const [trunticatedAddress, setTrunticatedAddress] = useState<string>(''); 

  useEffect(() => {
    (async () => {
      let local_address = await fetchItemFromStorage('address');
      if (local_address === null || local_address === undefined) {
        setAddress('...');
        return;
      }
      setAddress(local_address);
      setTrunticatedAddress(getEllipsisTxt(local_address, 4));
    })();
  }, []);

  const onCopyAddress = () => {
    Clipboard.setString(address);

    Toast.show({
      autoHide: true,
      text1: t('BackupAddress.walletAddressCopied'),
      type: 'success',
    });
  };

  const { t } = useTranslation();

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      handleComponent={() => null}
      snapPoints={snapPoints}
      backdropComponent={CustomBackdrop}
      enablePanDownToClose
      onClose={onCloseButtonPress}
      onChange={handleSheetChanges}>
      <View style={styles.content}>
        <VStack>
          <Spacer height={34} />

          <WalletAddressIcon color={Colors.DARK_PURPLE} />

          <Spacer height={20} />
          <Text
            size="2md"
            style={{
              fontWeight: 'bold',
            }}
            color={Colors.DARK_PURPLE}>
            {trunticatedAddress}
          </Text>
          <Spacer height={20} />

          <Button
            isLoading={false}
            size="medium-plus"
            onPress={onCopyAddress}
            backgroundColor={Colors.LIGHT_PURPLE}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CopyIcon color={Colors.WHITE} size="medium" />
              <Text
                color={Colors.WHITE}
                style={{
                  marginLeft: 10,
                }}
                weight="bold"
                translationKey={'BackupAddress.copy'}
              />
            </View>
          </Button>

          <Spacer height={20} />

          <Text
            style={styles.text}
            size="2xs"
            color={Colors.SEVENTYPERCENTPURPLE}>
            {t('BackupAddress.description')}
          </Text>
          <Spacer height={20} />
          <Button
            isLoading={false}
            onPress={onRevealSecretButtonPress}
            backgroundColor={Colors.LIGHT_PURPLE}>
            <Text
              color={Colors.WHITE}
              weight="bold"
              translationKey="BackupAddress.revealSecretPhrase"
            />
          </Button>
          <Spacer height={15} />
          <TouchableOpacity activeOpacity={0.7} onPress={onCloseButtonPress}>
            <Text
              color={Colors.SEVENTYPERCENTPURPLE}
              weight="bold"
              translationKey="BackupAddress.close"
            />
          </TouchableOpacity>
          <Spacer height={20} />
        </VStack>
      </View>
    </BottomSheet>
  );
}
export default BackupAddress;
