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
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
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

  const snapPoints = useMemo(() => ['47%', '47%'], []);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  const [address, setAddress] = useState<string | undefined>('');
  const [trunticatedAddress, setTrunticatedAddress] = useState<string>('');

  useEffect(() => {
    (async () => {
      let local_address = await fetchItemFromStorage('address');
      if (local_address === null || local_address === undefined) return;

      setAddress(local_address);
      setTrunticatedAddress(getEllipsisTxt(local_address, 4));
    })();
  }, []);

  const onCopyAddress = () => {
    if (address !== undefined) Clipboard.setString(address);

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
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          style={{ backgroundColor: Colors.DARK_PURPLE }}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
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
            style={styles.copyBtn}
            backgroundColor={Colors.LIGHT_PURPLE}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CopyIcon color={Colors.WHITE} size="medium" />
              <Text
                color={Colors.WHITE}
                style={styles.copyText}
                weight="bold"
                size="sm"
                translationKey={'BackupAddress.copy'}
              />
            </View>
          </Button>

          <Spacer height={20} />

          <Text
            style={styles.text}
            size="1xs"
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
              size="sm"
              style={styles.text}
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
