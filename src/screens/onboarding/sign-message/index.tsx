import { COMPLETED_ONBOARDING, NAME_SCREEN } from '$constants';
import {
  ArrowLeft,
  Button,
  SkyBackground,
  Spacer,
  Text,
  VStack,
} from '$components';
import { Colors } from '$theme';
import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import { getLocation, setItemToStorage } from '$utils';
import { useTranslation } from 'react-i18next';
import { convertUtf8ToHex } from '@walletconnect/utils';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

const rainbowIcon = require('src/assets/images/rainbowIcon.png');
const tick = require('src/assets/images/tick.png');

function LocationScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const connector = useWalletConnect();

  const [isSigned, setIsSigned] = useState<boolean>(false);

  const goBack = () => {
    navigation.goBack();
  };

  const handleSubmit = async () => {
    if (isSigned) {
      navigation.navigate(NAME_SCREEN);
    } else {
      const message = `App name is Pozzle Planet - ${new Date().toUTCString()}`;
      const hexMsg = convertUtf8ToHex(message);
      const address = connector.accounts[0];

      const msgParams = [hexMsg, address];
      connector.signPersonalMessage(msgParams).then(async result => {
        let data = {
          message,
          signature: result,
        };
        await setItemToStorage('WalletSignature', JSON.stringify(data));
        setIsSigned(true);
      });
    }
  };

  return (
    <SkyBackground style={styles.container}>
      <TouchableOpacity style={styles.arrowLeft} onPress={() => goBack()}>
        <ArrowLeft color={Colors.WHITE} />
      </TouchableOpacity>
      <VStack style={styles.content}>
        <Spacer height={220} />
        <Image source={isSigned ? tick : rainbowIcon} />
        <Spacer height={20} />
        <Text style={styles.title} size="2md" color={Colors.WHITE}>
          {isSigned ? t('signMessage.success.title') : t('signMessage.title')}
        </Text>
        <Spacer height={20} />
        <Text
          style={{
            fontWeight: 'bold',
          }}
          size="sm"
          color={Colors.GRAY2}>
          {isSigned
            ? t('signMessage.success.description')
            : t('signMessage.description')}
        </Text>
        <Spacer height={220} />
        <Button onPress={handleSubmit} backgroundColor={Colors.LIGHT_PURPLE}>
          <Text
            color={Colors.WHITE}
            weight="bold"
            translationKey="signMessage.continue"
          />
        </Button>
        <Spacer height={20} />
        {!isSigned && (
          <Text
            style={{
              fontWeight: 'bold',
            }}
            onPress={() => navigation.goBack()}
            size="sm"
            color={Colors.GRAY2}>
            {t('signMessage.cancel')}
          </Text>
        )}
        <Spacer height={70} />
      </VStack>
    </SkyBackground>
  );
}

export default LocationScreen;
