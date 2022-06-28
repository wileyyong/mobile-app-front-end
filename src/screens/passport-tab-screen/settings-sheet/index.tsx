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
} from '$components';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

import React from 'react';
import { Image, Modal, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect, useDispatch } from 'react-redux';
import { clearUser } from 'src/redux/user/actions';
import { removeItemFromStorage } from '$utils';

import styles from '../style';
import { Colors } from '$theme';
import { useTranslation } from 'react-i18next';

interface ISettingsSheet {
  onClose: () => void;
  show: boolean;
  logOut: () => void;
}

const SettingsSheet = ({ show, onClose, logOut }: ISettingsSheet) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const connector = useWalletConnect();
  return (
    <Modal visible={show} onDismiss={onClose} style={styles.settingsModal}>
      <CosmicBackground>
        <View style={[styles.iconsView,styles.settingsHeader]}>
          <Text size="lg" color={Colors.WHITE} style={styles.headerText}>
            {t('settingsScreen.settings')}
          </Text>
          <TouchableOpacity style={styles.settingsIcon} onPress={() => {}}>
            <CloseXIcon
              width={15}
              height={15}
              color={Colors.WHITE}
              style={{top:10}}></CloseXIcon>
          </TouchableOpacity>
        </View>
        <View style={styles.settingsModalContainer}>
          <TouchableOpacity style={styles.modalRow}>
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

          <TouchableOpacity style={styles.modalRow}>
            <HStack align="center" justify="center"> 
              <View style={styles.settingsIconContainer}> 
                <BellIcon color={Colors.PURPLE}></BellIcon>
              </View>
              
              <Text
                style={styles.settingsText}
                text={t('settingsScreen.pushNotifications')}
              />
            </HStack>
            <ArrowRight
              width={25}
              height={25}
              color={Colors.EIGHTYPERCENTWHITE}></ArrowRight>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalRow}>
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
          <TouchableOpacity
            style={styles.modalRow}
            onPress={() => {
              dispatch(clearUser());
              connector.killSession();
              removeItemFromStorage('sessionToken');
            }}>
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
        <TouchableOpacity style={styles.modalRow}>
          <HStack align="center" justify="center">
            <Text
              style={styles.settingsText}
              text={t('settingsScreen.learnAboutPozzle')}
            />
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalRow}>
          <HStack align="center" justify="center">
            <Text
              style={styles.settingsText}
              text={t('settingsScreen.privacy')}
            />
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalRow}>
          <HStack align="center" justify="center">
            <Text
              style={styles.settingsText}
              text={t('settingsScreen.followPozzle')}
            />
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalRow}>
          <HStack align="center" justify="center">
            <Text
              style={styles.settingsText}
              text={t('settingsScreen.feedbackAndSupport')}
            />
          </HStack>
        </TouchableOpacity>
        <HStack align="center" justify="center" style={styles.settingsVersionContainer}>
          <Text
            style={styles.settingsVersionText}
            text={t('settingsScreen.version')}
          />
        </HStack>
      </CosmicBackground>
    </Modal>
  );
};

/*
const mapDispatchToProps = () => {
  return {
    logOut: logoutUserDispatcher,
  };
};

export default connect(null, mapDispatchToProps)(SettingsSheet);
*/

export default SettingsSheet;
