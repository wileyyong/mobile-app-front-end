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

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Image, Share, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './style';
import { pozzlePilot } from './utils';
import { HStack, VStack } from '../../stacks';
import { Colors, Scaling } from '$theme';
import { useDispatch, useSelector } from 'react-redux';
import { showOptsSheet } from 'src/redux/progress-button/actions';
import { Pozzles } from '$api';
import { useActionSheet } from 'react-native-action-sheet';

type AboutPozzleType = {
  createdBy?: string;
  inspiredBy?: string;
  locationJoined: string;
  title?: string;
  pozzleId?: string;
};
const AboutPozzle = ({
  createdBy,
  inspiredBy,
  locationJoined,
  title,
  pozzleId,
}: AboutPozzleType) => {
  const { t } = useTranslation();
  const { showActionSheetWithOptions } = useActionSheet();
  const [showOptsSheet, setShowOptsSheet] = useState(false);
  const reduxUser = useSelector((state: any) => state.user);
  const reduxGeneric = useSelector((state: any) => state.generic);

  const sharePozzle = () => {
    // TO DO Revise Url
    console.log('sharePozzle');
    Share.share({ title: title, url: 'https://www.pozzleplanet.com/' });
  };

  const reportPozzle = async () => {
    console.log('reportPozzle');
    if (!pozzleId) return;

    await Pozzles.reportPozzle(pozzleId);
    Toast.show({
      autoHide: true,
      text1: t('videoScreen.success'),
      text2: t('videoScreen.pozzleReported'),
    });
  };

  const deletePozzle = async () => {
    console.log('deletePozzle');
    if (!pozzleId) return;
    await Pozzles.deletePozzle(pozzleId);
    Toast.show({
      autoHide: true,
      text1: t('videoScreen.success'),
      text2: t('videoScreen.pozzleDeleted'),
    });
  };
  const openSheet = () => {
    let sameUser = false;
    setShowOptsSheet(true);
    let cancelButtonIndex = 2;
    let destructiveButtonIndex = undefined;
    const options = [
      t('pozzleOptionsSheet.share'),
      t('pozzleOptionsSheet.report'),
      t('pozzleOptionsSheet.done'),
    ];

    const icons = [
      <ShareIcon height={20} color={Colors.DARK_PURPLE} />,
      <ReportIcon height={20} color={Colors.DARK_PURPLE} />,
    ];

    // Same user
    if (reduxUser.user && reduxUser.user._id === createdBy) {
      options.splice(2, 0, t('pozzleOptionsSheet.delete'));
      icons.splice(2, 0, <BinIcon height={20} color={Colors.ORANGE} />);
      cancelButtonIndex = 3;
      destructiveButtonIndex = 2;
      sameUser = true;
    }

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex: cancelButtonIndex,
        destructiveButtonIndex: destructiveButtonIndex,
        showSeparators: false,
        icons,
        containerStyle: styles.optsContainer,
        textStyle: styles.optsText,
        destructiveColor: Colors.ORANGE,
      },
      buttonIndex => {
        if (buttonIndex === undefined) return;

        const _buttonIndex = buttonIndex + (sameUser ? 1 : 0);
        switch (_buttonIndex) {
          case 0:
            //share
            sharePozzle();
            break;
          case 1:
            //report
            reportPozzle();
            break;
          case 2:
            if (!sameUser) return;
            //delete
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
                  onPress: () => {
                    deletePozzle();
                  },
                },
              ],
            );

            break;

          default:
            break;
        }
      },
    );
  };

  useEffect(() => {
    if (reduxGeneric.showOptsSheet && !showOptsSheet) {
      openSheet();
    }
  }, [reduxGeneric.showOptsSheet]);

  return (
    <View style={styles.aboutContainer}>
      <View style={styles.addedByContainer}>
        <HStack>
          <Image source={pozzlePilot} style={styles.addedByImage} />
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
                {t('aboutPozzle.joinedIn')} {locationJoined}
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
  );
};

export default AboutPozzle;
