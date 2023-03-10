import {
  BinIcon,
  LocationPinIcon,
  OptionsIcon,
  ReportIcon,
  SettingsIcon,
  ShareIcon,
  Text,
  Toast,
} from '$components';

import React, { useState } from 'react';
import { Alert, Image, Share, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './style';
import { pozzlePilot } from './utils';
import { HStack, VStack } from '../../stacks';
import { Colors } from '$theme';
import { useDispatch, useSelector } from 'react-redux';
import { Pozzles } from '$api';

import { SheetManager } from 'react-native-actions-sheet';
import ActionSheetPZ from '../action-sheet';
import { showPassportModal } from 'src/redux/generic/actions';

type AboutPozzleType = {
  createdBy?: string;
  inspiredBy?: string;
  locationJoined?: string;
  title?: string;
  pozzleId?: string;
  walletAddress: string;
};
const AboutPozzle = ({
  createdBy,
  inspiredBy,
  locationJoined,
  title,
  pozzleId,
  walletAddress,
}: AboutPozzleType) => {
  const { t } = useTranslation();
  const [showOptsSheet, setShowOptsSheet] = useState(false);
  const reduxUser = useSelector((state: any) => state.user);
  const reduxGeneric = useSelector((state: any) => state.generic);
  const dispatch = useDispatch();
  let options = [
    t('pozzleOptionsSheet.share'),
    t('pozzleOptionsSheet.report'),
    t('pozzleOptionsSheet.done'),
  ];

  let icons = [
    <ShareIcon height={24} width={24} color={Colors.DARK_PURPLE} />,
    <ReportIcon height={24} width={24} color={Colors.DARK_PURPLE} />,
  ];

  let sameUser = false;
  let cancelButtonIndex = 2;
  let destructiveButtonIndex = -1;

  // Same user
  if (reduxUser.user && reduxUser.user._id === createdBy) {
    options.splice(2, 0, t('pozzleOptionsSheet.delete'));
    icons.splice(
      2,
      0,
      <BinIcon height={24} width={24} color={Colors.ORANGE} />,
    );
    cancelButtonIndex = 3;
    destructiveButtonIndex = 2;
    sameUser = true;
  }

  const sharePozzle = () => {
    // TO DO Revise Url
    Share.share({ title: title, url: 'https://www.pozzleplanet.com/' }).then(
      () => {
        closeSheet();
      },
    );
  };

  const reportPozzle = async () => {
    if (!pozzleId) return;

    await Pozzles.reportPozzle(pozzleId).then(
      () => {
        closeSheet();
        Toast.show({
          autoHide: true,
          text1: t('videoScreen.success'),
          text2: t('videoScreen.pozzleReported'),
        });
      },
      err => {},
    );
  };

  const deletePozzle = () => {
    if (!pozzleId || !sameUser) return;

    Alert.alert(
      t('videoScreen.areYouSure'),
      t('videoScreen.deletePozzleVideo'),
      [
        {
          text: t('videoScreen.cancel'),
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: t('videoScreen.yes'),
          onPress: async () => {
            await Pozzles.deletePozzle(pozzleId).then(
              () => {
                closeSheet();
                Toast.show({
                  autoHide: true,
                  text1: t('videoScreen.success'),
                  text2: t('videoScreen.pozzleDeleted'),
                });
              },
              err => {},
            );
          },
        },
      ],
    );
  };

  const closeSheet = () => {
    SheetManager.hideAll();
    setShowOptsSheet(false);
  };

  const openSheet = () => {
    setShowOptsSheet(true);

    setTimeout(() => {
      SheetManager.show('options', {});
    }, 100);
  };

  return (
    <>
      <View style={styles.aboutContainer}>
        <View style={styles.addedByContainer}>
          <HStack>
            <TouchableOpacity
              onPress={() => {
                dispatch(showPassportModal(true, walletAddress));
              }}>
              <Image source={pozzlePilot} style={styles.addedByImage} />
            </TouchableOpacity>

            <VStack justify="space-evenly" style={styles.vStackContainer}>
              <HStack>
                <Text size="xxs" style={styles.headerText} weight="bold">
                  {createdBy}
                </Text>
                {inspiredBy && (
                  <Text
                    size="xxs"
                    style={[styles.headerText, styles.inpiredBy]}
                    weight="regular">
                    {t('aboutPozzle.inspiredBy')} {inspiredBy}
                  </Text>
                )}
              </HStack>
              <HStack
                justify="flex-start"
                align="flex-start"
                style={styles.hStackContainer}>
                <LocationPinIcon
                  width={15}
                  height={15}
                  size="medium"
                  color={Colors.GRAY3}
                  style={styles.opacity}></LocationPinIcon>
                <Text
                  size="xxs"
                  color={Colors.GRAY3}
                  weight="regular"
                  style={styles.opacity}>
                  {locationJoined}
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <TouchableOpacity
            style={styles.optionsIcon}
            onPress={() => {
              openSheet();
            }}>
            <OptionsIcon size="large" color={Colors.WHITE} />
          </TouchableOpacity>
        </View>
      </View>
      {showOptsSheet && (
        <ActionSheetPZ
          options={{
            options,
            icons,
            cancelButtonIndex,
            destructiveButtonIndex,
            destructiveColor: Colors.ORANGE,
            defaultColor: Colors.DARK_PURPLE,
            sameUser: sameUser,
            sharePozzle,
            reportPozzle,
            deletePozzle,
            closeSheet,
          }}></ActionSheetPZ>
      )}
    </>
  );
};

export default AboutPozzle;
