import { Text, Modal, HStack } from '$components';

import React from 'react';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../style';

const ArrowRight = require('src/assets/images/rightArrow.png');
const WalletInfo = require('src/assets/images/wallet-info-image.png');
const PushNotifications = require('src/assets/images/push-notification.png');
const Privacy = require('src/assets/images/privacy.png');
const InviteAFriend = require('src/assets/images/invite-a-friend.png');
const LogOut = require('src/assets/images/logout.png');

interface ISettingsSheet {
  onClose: () => void;
  show: boolean;
}

const SettingsSheet = ({ show, onClose }: ISettingsSheet) => {
  return (
    <Modal icon="settings" show={show} title="Settings" onClose={onClose}>
      <View style={styles.explainer}>
        <TouchableOpacity style={styles.modalRow}>
          <HStack align="center" justify="center">
            <Image source={WalletInfo} />
            <Text
              style={{ fontSize: 16, marginLeft: 10 }}
              text="Wallet Info"
              weight="bold"
            />
          </HStack>
          <Image source={ArrowRight} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalRow}>
          <HStack align="center" justify="center">
            <Image source={PushNotifications} />
            <Text
              style={{ fontSize: 16, marginLeft: 10 }}
              text="Push Notifications"
              weight="bold"
            />
          </HStack>
          <Image source={ArrowRight} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalRow}>
          <HStack align="center" justify="center">
            <Image source={Privacy} />
            <Text
              style={{ fontSize: 16, marginLeft: 10 }}
              text="Privacy"
              weight="bold"
            />
          </HStack>
          <Image source={ArrowRight} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalRow}>
          <HStack align="center" justify="center">
            <Image source={InviteAFriend} />
            <Text
              style={{ fontSize: 16, marginLeft: 10 }}
              text="Invite A Friend"
              weight="bold"
            />
          </HStack>
          <Image source={ArrowRight} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalRow}>
          <HStack align="center" justify="center">
            <Image source={LogOut} />
            <Text
              style={{ fontSize: 16, marginLeft: 10 }}
              text="Log Out"
              weight="bold"
            />
          </HStack>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SettingsSheet;