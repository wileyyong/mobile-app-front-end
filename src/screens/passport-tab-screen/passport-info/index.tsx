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
  Earth,
  PlanetIcon,
  EarthIcon,
} from '$components';
import { Colors, Scaling } from '$theme';

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../style';
import SettingsSheet from '../settings-sheet';
import { useTranslation } from 'react-i18next';

const pozzlePlanetLogo = require('src/assets/svg/poz_horizontal_logo.svg');
const pozzlePilot = require('src/assets/images/pozzlePilot.png');

const PassportInPut = ({ value }: { value: string }) => (
  <View style={{ marginTop: 2 }}>
    <TextInput style={styles.passportInput} value={value} />
    <DashedLine color="#CAA7D1" type="normal" />
  </View>
);

const DashedLine = ({ color, type }) => {
  return (
    <View
      style={[
        type === 'normal'
          ? styles.dashedLine
          : type === 'middle'
          ? styles.dashedLineMiddle
          : styles.dashedLineHalf,
        { borderColor: color },
      ]}></View>
  );
};

const PassportInfo = ({ navigation, route }: INavigationProps) => {
  const [showSheet, setShowSheet] = useState(false);
  const { t } = useTranslation();

  return (
    <CosmicBackground>
      <ScrollView>
        <View style={styles.passportContainer}>
          <View style={styles.iconsView}>
            <Text
              size="lg"
              weight="bold"
              color={Colors.WHITE}
              style={{ textTransform: 'uppercase' }}>
              {t('passportScreen.myPassport')}
            </Text>
            <TouchableOpacity onPress={() => setShowSheet(true)}>
              <SettingsIcon
                width={25}
                height={25}
                color={Colors.WHITE}></SettingsIcon>
            </TouchableOpacity>
          </View>
          <VStack style={styles.editView}>
            <PozLogo
              color={Colors.LIGHT_PURPLE}
              width={400}
              height={60}
              size={'medium'}></PozLogo>
            <HStack style={styles.userSummary}>
              <WrappedImage
                style={styles.userImage}
                source={pozzlePilot}
                height={112}
                width={112}></WrappedImage>
              <VStack justify="space-between" style={styles.userSummaryData}>
                <HStack
                  justify="space-between"
                  align="flex-start"
                  style={styles.flexRow}>
                  <HStack
                    justify="flex-start"
                    align="flex-start"
                    style={styles.flexRow}>
                    <PolygonIcon color={Colors.LIGHT_PURPLE}></PolygonIcon>
                    <Text style={styles.labelText}>52</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text style={styles.labelInfo}>
                      {t('passportScreen.formfield.pozitiveVideos')}
                    </Text>
                  </HStack>
                  <DashedLine color={Colors.GRAY2} type="normal"></DashedLine>
                </HStack>
                <HStack
                  justify="space-between"
                  align="flex-start"
                  style={styles.flexRow}>
                  <HStack
                    justify="flex-start"
                    align="flex-start"
                    style={styles.flexRow}>
                    <EarthIcon color={Colors.LIGHT_PURPLE}></EarthIcon>
                    <Text style={styles.labelText}>52</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text style={styles.labelInfo}>
                      {t('passportScreen.formfield.planetsVisited')}
                    </Text>
                  </HStack>
                  <DashedLine color={Colors.GRAY2} type="normal"></DashedLine>
                </HStack>
                <HStack
                  justify="space-between"
                  align="flex-start"
                  style={styles.flexRow}>
                  <HStack
                    justify="flex-start"
                    align="flex-start"
                    style={styles.flexRow}>
                    <PledgeIcon color={Colors.LIGHT_PURPLE}></PledgeIcon>
                    <Text style={styles.labelText}>52</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text style={styles.labelInfo}>
                      {t('passportScreen.formfield.pozPledge')}
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
            </HStack>

            <VStack style={styles.rowInfo}>
              <HStack
                justify="space-between"
                align="flex-start"
                style={styles.flexRow}>
                <HStack
                  justify="flex-start"
                  align="flex-start"
                  style={styles.flexRow}>
                  <Text style={styles.labelText}>Ladypozzle</Text>
                </HStack>
                <HStack justify="space-between">
                  <Text style={styles.labelText}>She/her</Text>
                </HStack>
              </HStack>
              <DashedLine color={Colors.GRAY2} type="half"></DashedLine>
              <HStack
                justify="space-between"
                align="flex-start"
                style={styles.flexRow}>
                <HStack
                  justify="flex-start"
                  align="flex-start"
                  style={styles.flexRow}>
                  <Text style={styles.labelInfo}>{t('passportScreen.formfield.username')}</Text>
                </HStack>
                <HStack justify="space-between">
                  <Text style={styles.labelInfo}>{t('passportScreen.formfield.pronouns')} </Text>
                </HStack>
              </HStack>
            </VStack>
            <VStack style={styles.rowInfo}>
              <HStack
                justify="space-evenly"
                align="flex-start"
                style={styles.flexRow}>
                <HStack
                  justify="flex-start"
                  align="flex-start"
                  style={[
                    styles.flexRow,
                    { width: '45%', paddingRight: '10%' },
                  ]}>
                  <Text style={styles.labelText}>Melbourne, AUS</Text>
                  <DashedLine color={Colors.GRAY2} type="middle"></DashedLine>
                </HStack>
                <HStack
                  justify="space-between"
                  style={[styles.flexRow, { width: '45%' }]}>
                  <Text style={styles.labelText}>1 January 2022</Text>
                  <DashedLine color={Colors.GRAY2} type="middle"></DashedLine>
                </HStack>
              </HStack>
              <HStack
                justify="space-between"
                align="flex-start"
                style={styles.flexRow}>
                <HStack
                  justify="flex-start"
                  align="flex-start"
                  style={[
                    styles.flexRow,
                    { width: '45%', paddingRight: '10%' },
                  ]}>
                  <Text style={styles.labelInfo}>{t('passportScreen.formfield.location')}</Text>
                </HStack>
                <HStack
                  justify="space-between"
                  style={[styles.flexRow, { width: '45%' }]}>
                  <Text style={styles.labelInfo}>{t('passportScreen.formfield.dateJoined')}</Text>
                </HStack>
              </HStack>
            </VStack>
            <VStack
              style={[styles.rowInfo, { width: '100%' }]}
              justify="space-between"
              align="flex-start">
              <HStack style={[styles.flexRow]}>
                <Text style={styles.labelText}>0x43534543</Text>
              </HStack>
              <DashedLine color={Colors.GRAY2} type="half"></DashedLine>
              <HStack style={styles.flexRow}>
                <Text style={styles.labelInfo}>{t('passportScreen.formfield.walletId')}</Text>
              </HStack>
            </VStack>
            <VStack style={[styles.rowInfo, { width: '100%' }]}>
              <Button
                type={'outline'}
                size={'full'}
                backgroundColor={Colors.WHITE}
                styleOutlineButton={{
                  padding: 5,
                  borderColor: Colors.LIGHT_PURPLE,
                }}
                isLoading={false}>
                <Text color={Colors.LIGHT_PURPLE}>
                  {t('passportScreen.editPassport')}
                </Text>
              </Button>
            </VStack>
          </VStack>
        </View>
        <View style={styles.ticketView}>
          <Text
            size="lg"
            weight="bold"
            color={Colors.WHITE}
            style={{
              textTransform: 'uppercase',
              paddingVertical: Scaling.scale(17),
            }}>
            {t('passportScreen.planetTickets')}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              height: 150,
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
