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
} from '$components';
import { Colors } from '$theme';

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import DashedLine from 'react-native-dashed-line';

import styles from '../style';
import SettingsSheet from '../settings-sheet';
import { useTranslation } from 'react-i18next';

const EditImage = require('src/assets/images/edit.png');
const SettingsImage = require('src/assets/images/settings.png');
const RectangleImage = require('src/assets/images/rectangleImage.png');
const CircleImage = require('src/assets/images/circleImage.png');
const Triangle = require('src/assets/images/triangle.png');
const Star = require('src/assets/images/star.png');
const pozzlePilot = require('src/assets/images/pozzlePilot.png');

const PassportInPut = ({ value }: { value: string }) => (
  <View style={{ marginTop: 2 }}>
    <TextInput style={styles.passportInput} value={value} />
    <DashedLine dashColor="#CAA7D1" dashGap={5} dashLength={5} />
  </View>
);

const PassportInfo = ({ navigation, route }: INavigationProps) => {
  const [showSheet, setShowSheet] = useState(false);
  const { t } = useTranslation();

  return (
    <CosmicBackground>
      <ScrollView>
        <View style={styles.passportContainer}>
          <View style={styles.iconsView}>
            <Text size="sm" weight="bold" color={Colors.WHITE}>
              {t('passportScreen.myPassport')}
            </Text>
            <TouchableOpacity onPress={() => setShowSheet(true)}>
              <SettingsIcon></SettingsIcon>
            </TouchableOpacity>
          </View>
          <VStack style={styles.editView}>
            <WrappedImage
              source={RectangleImage}
              height={50}
              width={300}></WrappedImage>
            <HStack>
              <WrappedImage
                source={pozzlePilot}
                height={112}
                width={112}></WrappedImage>
              <VStack>
                <HStack>
                  <SettingsIcon></SettingsIcon>
                  <Text>52</Text>
                  <Text>{t('passportScreen.formfield.pozitiveVideos')}</Text>
                </HStack>
                <HStack>
                  <SettingsIcon></SettingsIcon>
                  <Text>52</Text>
                  <Text>{t('passportScreen.formfield.planetsVisited')}</Text>
                </HStack>
                <HStack>
                  <SettingsIcon></SettingsIcon>
                  <Text>52</Text>
                  <Text>{t('passportScreen.formfield.pozPledge')}</Text>
                </HStack>
              </VStack>
            </HStack>
            <VStack>
              <HStack>
                <Text>Ladypozzle</Text>
                <Text>She/her</Text>
              </HStack>
              <HStack>
                <Text>USERNAME</Text>
                <Text>PRONOUNS </Text>
              </HStack>
            </VStack>
            <VStack>
              <HStack>
                <Text>Melbourne, AUS</Text>
                <Text>1 January 2022</Text>
              </HStack>
              <HStack>
                <Text>LOCATION</Text>
                <Text>DATE JOINED </Text>
              </HStack>
            </VStack>
            <VStack>
              <Text>0x43534543</Text>
              <Text>WALLET ID</Text>
              <Button isLoading={false}>
              <Text>{t('passportScreen.editPassport')}</Text>
                </Button>
            </VStack>
          </VStack>
        </View>
        <View style={styles.ticketView}>
          <Text size="sm" weight="bold" color={Colors.WHITE}>
            {t('passportScreen.planetTickets')}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              height: 150,
              marginTop: 32,
            }}>
            {[1, 2, 3].map(item => (
              <Ticket key={item} />
            ))}
          </ScrollView>
        </View>
        <Spacer height={100} />
      </ScrollView>
      <SettingsSheet show={showSheet} onClose={() => setShowSheet(false)} />
    </CosmicBackground>
  );
};

export default PassportInfo;
