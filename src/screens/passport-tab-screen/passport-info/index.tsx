import {
  WrappedImage,
  CosmicBackground,
  HStack,
  SettingsIcon,
  Spacer,
  Text,
  Ticket,
  VStack,
  Button,
  PozLogo,
  PolygonIcon,
  PledgeIcon,
  EarthIcon,
  Hexagon,
  PassportData,
} from '$components';
import { BorderRadius, Colors, Scaling } from '$theme';

import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../style';
import SettingsSheet from '../settings-sheet';
import EditPassport from '../edit-passport';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Users } from '$api';
import { activityVideo } from 'src/shared/api/activities/models'; 
 
interface IPassportView {
  userId?: string
  otherUserPassport: boolean
}

const PassportInfo = ({ userId, otherUserPassport }: IPassportView) => {
  const [showSheet, setShowSheet] = useState(false);
  const [showEditPassport, setShowEditPassport] = useState(false);
  const { t } = useTranslation();

  return (
    <CosmicBackground>
      {!otherUserPassport && <View style={styles.iconsView}>
        <Text
          size="lg"
          color={Colors.WHITE}
          style={styles.headerText}>
          {t('passportScreen.myPassport')}
        </Text>
        <TouchableOpacity onPress={() => setShowSheet(true)}>
          <SettingsIcon
            width={25}
            height={25}
            color={Colors.WHITE}></SettingsIcon>
        </TouchableOpacity>
      </View>}
      <ScrollView>
         <PassportData userId={userId} otherUserPassport={otherUserPassport} showEditPassport={setShowEditPassport} isEditPassportVisible={showEditPassport}></PassportData>
      </ScrollView>
      <SettingsSheet show={showSheet} onClose={() => setShowSheet(false)} />
      <EditPassport show={showEditPassport} onClose={() => setShowEditPassport(false) } />
    </CosmicBackground>
  );
};

export default PassportInfo;