import { Activities, Pozzlers, Pozzles } from '$api';
import {
  Button,
  Text,
  VStack,
  Modal,
  Spacer,
  HStack,
  WalletIcon,
  ArrowRight,
  WrappedImage,
  ImageBackground,
  CloseIcon,
  Toast,
} from '$components';
import { BorderRadius, Colors, Scaling, Shadow } from '$theme';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './style';

const pozIcon1 = require('src/assets/images/poz_token.png');
const pozIcon2 = require('src/assets/images/poz_token_x2.png');
const pozIcon3 = require('src/assets/images/poz_token_x3.png');

const BACKGROUND_TEXTURE = require('src/assets/images/rainbow.png');

const PledgeSheet = ({
  show,
  onClose,
  title,
  activityId,
}: {
  show: boolean;
  onClose: () => void;
  title: string;
  activityId: string;
}) => {
  const [pozPledge, setPozPledge] = useState<any>(0.1);
  const [userPozBalance, setUserPozBalance] = useState(0);
  const [hasLoadUserBalance, setHasLoadUserBalance] = useState(false);
  const { t } = useTranslation();
  const redux = useSelector((state: any) => state.user);
  const textInputRef = useRef();

  const submitPledge = async () => {
    if (pozPledge > userPozBalance) {
      Toast.show({
        autoHide: true,
        text1: t('pozzleActivityScreen.error'),
        text2: t('pozzleActivityScreen.insufficientBalance'),
        type: 'error',
      });
      return;
    }

    await Activities.pledgeActivity(pozPledge, activityId).then(
      () => {
        Toast.show({
          autoHide: true,
          text1: t('pozzleActivityScreen.success'),
          text2: t('pozzleActivityScreen.pledgeSuccesful'),
        });
      },
      err => {},
    );
  };

  const getUserBalance = async () => {
    const user = redux.user;
    await Pozzlers.getUser(user._id).then((userData: any) => {
      if (userData.balance) setUserPozBalance(userData.balance);
      else setUserPozBalance(0);
      setHasLoadUserBalance(true);
    });
  };

  const updatePozValue = (text: string) => {
    setPozPledge(text);
  };

  useEffect(() => {
    if (!hasLoadUserBalance) {
      getUserBalance();
    }
  }, []);

  return (
    <Modal
      usePledgeHeader={true}
      show={show}
      icon={'pledge'}
      onClose={() => {
        Keyboard.dismiss();
        onClose();
      }}
      snapPoints={[Platform.OS === 'android' ? '80%' : '60%']}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.parentView}>
          <VStack>
            <Text size="xs" style={styles.header} color={Colors.BLACK}>
              {t('pozzlePledgeSheet.header')}
            </Text>
            <Text size="xs" style={styles.subheader} color={Colors.BLACK}>
              {title}
            </Text>
            <Spacer height={10} />
            <Text size="xs" style={styles.explainerContainer}>
              {t('pozzlePledgeSheet.information')}
            </Text>
          </VStack>
          <Spacer height={18} />
          <VStack>
            <HStack>
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss();
                  setPozPledge(0.1);
                }}
                style={styles.touchableContainer}>
                {pozPledge === 0.1 && (
                  <ImageBackground
                    source={BACKGROUND_TEXTURE}
                    style={styles.backgroundImage}></ImageBackground>
                )}
                <VStack
                  style={[
                    styles.pledgeBox,
                    pozPledge === 0.1 ? styles.selectedPledge : '',
                  ]}>
                  <Image
                    resizeMode={Platform.OS === 'android' ? 'center' : 'cover'}
                    style={styles.pozIcon}
                    source={pozIcon1}
                  />
                  <Spacer height={10} />
                  <Text
                    size="xs"
                    style={styles.pozText}
                    color={Colors.DARK_PURPLE}>
                    {'0.1 ' + t('pozzlePledgeSheet.poz')}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss();
                  setPozPledge(0.25);
                }}
                style={styles.touchableContainer}>
                {pozPledge === 0.25 && (
                  <ImageBackground
                    source={BACKGROUND_TEXTURE}
                    style={styles.backgroundImage}></ImageBackground>
                )}
                <VStack
                  style={[
                    styles.pledgeBox,
                    pozPledge === 0.25 ? styles.selectedPledge : '',
                  ]}>
                  <Image
                    resizeMode={Platform.OS === 'android' ? 'center' : 'center'}
                    style={[styles.pozIcon, styles.pozIcon2]}
                    source={pozIcon2}
                  />
                  <Spacer height={10} />
                  <Text
                    size="xs"
                    style={styles.pozText}
                    color={Colors.DARK_PURPLE}>
                    {'0.25 ' + t('pozzlePledgeSheet.poz')}
                  </Text>
                </VStack>
              </TouchableOpacity>
            </HStack>
            <HStack>
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss();
                  setPozPledge(0.5);
                }}
                style={styles.touchableContainer}>
                {pozPledge === 0.5 && (
                  <ImageBackground
                    source={BACKGROUND_TEXTURE}
                    style={styles.backgroundImage}></ImageBackground>
                )}
                <VStack
                  style={[
                    styles.pledgeBox,
                    pozPledge === 0.5 ? styles.selectedPledge : '',
                  ]}>
                  <Image
                    resizeMode={Platform.OS === 'android' ? 'center' : 'cover'}
                    style={[styles.pozIcon, styles.pozIcon3]}
                    source={pozIcon3}
                  />
                  <Spacer height={10} />
                  <Text
                    size="xs"
                    style={styles.pozText}
                    color={Colors.DARK_PURPLE}>
                    {'0.5 ' + t('pozzlePledgeSheet.poz')}
                  </Text>
                </VStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPozPledge(0);
                  if (!textInputRef.current.isFocused())
                    textInputRef.current.focus();
                }}
                style={styles.touchableContainer}>
                {pozPledge === 0 && (
                  <ImageBackground
                    source={BACKGROUND_TEXTURE}
                    style={styles.backgroundImage}></ImageBackground>
                )}
                <VStack
                  style={[
                    styles.pledgeBox,
                    pozPledge === 0 ? styles.selectedPledge : '',
                  ]}>
                  <Image
                    resizeMode={Platform.OS === 'android' ? 'center' : 'cover'}
                    style={styles.pozIcon}
                    source={pozIcon1}
                  />
                  <Spacer height={10} />
                  <BottomSheetTextInput
                    ref={textInputRef}
                    multiline={false}
                    onChangeText={updatePozValue}
                    onFocus={() => {
                      setPozPledge(0);
                    }}
                    placeholderTextColor={Colors.DARK_PURPLE}
                    keyboardType={'number-pad'}
                    placeholder={t('pozzlePledgeSheet.custom')}
                    style={[
                      styles.pozText,
                      styles.customPozText,
                    ]}></BottomSheetTextInput>
                </VStack>
              </TouchableOpacity>
            </HStack>
          </VStack>
          <Spacer height={10} />
          <HStack
            align="flex-start"
            justify="space-between"
            style={styles.walletContainer}>
            <HStack>
              <WalletIcon color={Colors.DARK_PURPLE} />
              <Text
                size="xs"
                style={styles.walletBalanceText}
                color={Colors.DARK_PURPLE}>
                {t('pozzlePledgeSheet.walletBalance') +
                  ' ' +
                  userPozBalance +
                  ' ' +
                  t('pozzlePledgeSheet.poz')}
              </Text>
            </HStack>
            <HStack justify="flex-end">
              <ArrowRight color={Colors.DARK_PURPLE} />
            </HStack>
          </HStack>
          <Spacer height={18} />
          <Button
            type={'outline'}
            backgroundColor={Colors.GRAY3}
            styleOutlineButton={{
              borderRadius: BorderRadius.XL,
              padding: 2,
            }}
            onPress={submitPledge}>
            <Text
              size="xs"
              style={styles.buttonText}
              color={Colors.DARK_PURPLE}>
              {t('pozzlePledgeSheet.poz') +
                ' ' +
                pozPledge +
                ' ' +
                t('pozzlePledgeSheet.poz')}
            </Text>
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default PledgeSheet;
