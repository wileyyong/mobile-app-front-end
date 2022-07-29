import {
  Text,
  HStack,
  CloseXIcon,
  CosmicBackground,
  ArrowRight,
  BackupWalletIcon,
  FriendsIcon,
  LogoutIcon,
  BellIcon,
  Switch,
  BackupAddress,
  InviteFriend,
  Toast,
} from '$components';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';
import { clearUser } from 'src/redux/user/actions';
import { firebaseMessaging, removeItemFromStorage } from '$utils';
import styles from '../style';
import { Colors } from '$theme';
import { useTranslation } from 'react-i18next';
import { SettingsScreenURLS } from 'src/shared/constants/urls';
import { useEffect } from 'react';
import { version } from '../../../../package.json';
interface ISettingsSheet {
  onClose: () => void;
  show: boolean;
  logOut?: () => void;
}

const SettingsSheet = ({ show, onClose, logOut }: ISettingsSheet) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const connector = useWalletConnect();
  const appVersion = version;

  const toggleNotificationSwitch = async () => {
    if (!isNotificationEnabled) {
      const newState = await firebaseMessaging.requestUserPermission();
      setIsNotificationEnabled(newState);
    } else {
      setIsNotificationEnabled(previousState => !previousState);
    }
  };

  const openURL = (url: string) => {
    Linking.openURL(url);
  };

  const logOutUser = () => {
    dispatch(clearUser());
    connector.killSession();
    removeItemFromStorage('sessionToken');
    removeItemFromStorage('address');
    removeItemFromStorage('mnemonic');
    removeItemFromStorage('CreatedNewWallet');
    navigation.navigate('Root');
    onClose();
  };

  useEffect(() => {
    firebaseMessaging.checkUserPermission().then((permission: boolean) => {
      if (isNotificationEnabled != permission) {
        setIsNotificationEnabled(permission);
      }
    });
  }, []);

  const [showBackUpModal, setShowBackUpModal] = useState(false);
  const [showInviteFriendModal, setShowInviteFriendModal] = useState(false);

  const toggleBackupModal = () => setShowBackUpModal(!showBackUpModal);

  const togglInviteFriendModal = () =>
    setShowInviteFriendModal(!showInviteFriendModal);

  return (
    <Modal visible={show} onDismiss={onClose} style={styles.settingsModal}>
      <CosmicBackground>
        <View style={[styles.settingsHeader]}>
          <Text
            size="slg"
            color={Colors.WHITE}
            family="title"
            style={styles.headerText}>
            {t('settingsScreen.settings')}
          </Text>
          <TouchableOpacity
            hitSlop={{ top: 40, bottom: 40, left: 40, right: 40 }}
            style={styles.settingsIcon}
            onPress={onClose}>
            <CloseXIcon
              width={15}
              height={15}
              color={Colors.WHITE}
              style={{ top: 10 }}></CloseXIcon>
          </TouchableOpacity>
        </View>
        <View style={styles.settingsModalContainer}>
          <TouchableOpacity
            style={styles.modalRow}
            activeOpacity={0.6}
            onPress={toggleBackupModal}>
            <HStack align="center" justify="center">
              <View style={styles.settingsIconContainer}>
                <BackupWalletIcon color={Colors.PURPLE}></BackupWalletIcon>
              </View>
              <Text
                style={styles.settingsText}
                text={t('settingsScreen.backupWallet')}
              />
            </HStack>
            <ArrowRight
              width={25}
              height={25}
              color={Colors.EIGHTYPERCENTWHITE}></ArrowRight>
          </TouchableOpacity>

          <View style={styles.modalRow}>
            <HStack align="center" justify="center">
              <View style={styles.settingsIconContainer}>
                <BellIcon color={Colors.PURPLE}></BellIcon>
              </View>

              <Text
                style={styles.settingsText}
                text={t('settingsScreen.pushNotifications')}
              />
            </HStack>
            <Switch
              isOn={isNotificationEnabled}
              onColor={Colors.LIGHT_PURPLE}
              offColor={'#DFD4FF14'}
              size="medium"
              disabled={false}
              onToggle={toggleNotificationSwitch}></Switch>
          </View>
          <TouchableOpacity
            style={styles.modalRow}
            activeOpacity={0.6}
            onPress={togglInviteFriendModal}>
            <HStack align="center" justify="center">
              <View style={styles.settingsIconContainer}>
                <FriendsIcon color={Colors.PURPLE}></FriendsIcon>
              </View>
              <Text
                style={styles.settingsText}
                text={t('settingsScreen.inviteFriend')}
              />
            </HStack>
            <ArrowRight
              width={25}
              height={25}
              color={Colors.EIGHTYPERCENTWHITE}></ArrowRight>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalRow} onPress={logOutUser}>
            <HStack align="center" justify="center">
              <View style={styles.settingsLogoutIconContainer}>
                <LogoutIcon color={Colors.WHITE}></LogoutIcon>
              </View>
              <Text
                style={styles.settingsLogoutText}
                text={t('settingsScreen.logOut')}
              />
            </HStack>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.modalRowLinks}
          onPress={() => {
            openURL(SettingsScreenURLS.learnMoreAboutPozzle);
          }}>
          <HStack align="center" justify="center">
            <Text
              style={styles.settingsText}
              text={t('settingsScreen.learnAboutPozzle')}
            />
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalRowLinks} onPress={() => {}}>
          <HStack align="center" justify="center">
            <Text
              style={styles.settingsText}
              text={t('settingsScreen.privacy')}
            />
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.modalRowLinks}
          onPress={() => {
            openURL(SettingsScreenURLS.twitter);
          }}>
          <HStack align="center" justify="center">
            <Text
              style={styles.settingsText}
              text={t('settingsScreen.followPozzle')}
            />
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.modalRowLinks}
          onPress={() => {
            openURL(SettingsScreenURLS.discordSupportChannel);
          }}>
          <HStack align="center" justify="center">
            <Text
              style={styles.settingsText}
              text={t('settingsScreen.feedbackAndSupport')}
            />
          </HStack>
        </TouchableOpacity>
        <HStack
          align="center"
          justify="center"
          style={styles.settingsVersionContainer}>
          <Text
            style={styles.settingsVersionText}
            text={t('settingsScreen.version') + ' ' + appVersion}
          />
        </HStack>

        {showBackUpModal && (
          <BackupAddress
            onCloseButtonPress={toggleBackupModal}
            onRevealSecretButtonPress={() => {}}
          />
        )}
        {showInviteFriendModal && (
          <InviteFriend onCloseButtonPress={togglInviteFriendModal} />
        )}
      </CosmicBackground>
      <Toast />
    </Modal>
  );
};

export default SettingsSheet;
