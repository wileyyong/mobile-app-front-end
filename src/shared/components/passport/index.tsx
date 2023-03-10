import { Users } from '$api';
import {
  AlphaOverlay,
  Button,
  ButtonBorder,
  EarthIcon,
  Hexagon,
  HStack,
  PledgeIcon,
  PolygonIcon,
  PozLogo,
  Text,
  Ticket,
  VStack,
  WrappedImage,
} from '$components';
import { BorderRadius, Colors, Scaling } from '$theme';
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { activityVideo } from 'src/shared/api/activities/models';
import styles from './styles';

const pozzlePilot = require('src/assets/images/pozzlePilot.png');

interface IPassportView {
  userId?: string;
  otherUserPassport: boolean;
  showEditPassport: any;
  isEditPassportVisible: boolean;
}

const DashedLine = ({ color, type }) => {
  return (
    <View
      style={[
        type === 'normal'
          ? styles.dashedLine
          : type === 'middle'
          ? styles.dashedLineMiddle
          : type === 'normal-middle'
          ? styles.dashedLineNormalMiddle
          : type === 'bio'
          ? styles.dashedLineBio
          : styles.dashedLineHalf,
        { backgroundColor: color },
      ]}></View>
  );
};

const PassportData = ({
  userId,
  otherUserPassport,
  showEditPassport,
  isEditPassportVisible,
}: IPassportView) => {
  const [userPozzles, setUserPozzles] = useState<activityVideo[] | undefined>();
  const loggedUser = useSelector(state => state.user);
  const [user, setUser] = useState(loggedUser);
  const navigation = useNavigation();

  const launchVideosTabScreen = item => {
    navigation.navigate(VIDEO_SCREEN, {
      item: item,
      parent: 'Passport',
    });
  };

  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString();
  };

  const loadUserPozzles = () => {
    Users.getPozzles(user.user._id).then(data => {
      if (data.data) setUserPozzles(data.data);
    });
  };

  const loadUser = () => {
    Users.getUserWithWalletId(userId).then(data => {
      setUser({ user: data.data[0] });

      loadUserPozzles();
    });
  };
  useEffect(() => {
    if (userId && otherUserPassport) {
      loadUser();
    }
    if (!userPozzles) {
      loadUserPozzles();
    }

    if (loggedUser.user != user.user) {
      setUser(loggedUser);
    }
  }, [loggedUser, isEditPassportVisible]);

  return (
    <>
      <View>
        <VStack justify="space-evenly" style={styles.editView}>
          <PozLogo
            color={Colors.LIGHT_PURPLE}
            width={400}
            height={60}
            style={{ marginVertical: 14 }}
            size={'medium'}></PozLogo>
          <HStack style={styles.userSummary}>
            <WrappedImage
              style={styles.userImage}
              source={pozzlePilot}
              height={112}
              width={112}></WrappedImage>
            <VStack justify="center" style={styles.userSummaryData}>
              <HStack
                justify="space-between"
                align="flex-start"
                style={styles.flexRow}>
                <HStack
                  justify="flex-start"
                  align="flex-start"
                  style={styles.flexRow}>
                  <PolygonIcon
                    width={17}
                    height={17}
                    color={Colors.LIGHT_PURPLE}></PolygonIcon>
                  <Text
                    weight={'semibold'}
                    style={[
                      styles.labelText,
                      { paddingLeft: Scaling.scale(5) },
                    ]}>
                    542
                  </Text>
                </HStack>

                <HStack justify="space-between">
                  <Text style={styles.labelInfo}>
                    {t('passportScreen.formfield.pozzleVideos')}
                  </Text>
                </HStack>
                <DashedLine
                  color={Colors.GRAY2}
                  type="normal-middle"></DashedLine>
              </HStack>

              <HStack
                justify="space-between"
                align="flex-start"
                style={styles.flexRow}>
                <HStack
                  justify="flex-start"
                  align="flex-start"
                  style={styles.flexRow}>
                  <EarthIcon
                    width={18}
                    height={18}
                    color={Colors.LIGHT_PURPLE}></EarthIcon>
                  <Text
                    weight={'semibold'}
                    style={[
                      styles.labelText,
                      { paddingLeft: Scaling.scale(5) },
                    ]}>
                    5
                  </Text>
                </HStack>
                <HStack justify="space-between">
                  <Text style={styles.labelInfo}>
                    {t('passportScreen.formfield.planetsVisited')}
                  </Text>
                </HStack>
                <DashedLine
                  color={Colors.GRAY2}
                  type="normal-middle"></DashedLine>
                <AlphaOverlay
                  text={'COMING SOON'}
                  style={{ top: -6.5 }}></AlphaOverlay>
              </HStack>

              <HStack
                justify="space-between"
                align="flex-start"
                style={styles.flexRow}>
                <HStack
                  justify="flex-start"
                  align="flex-start"
                  style={styles.flexRow}>
                  <PledgeIcon
                    width={19}
                    height={19}
                    color={Colors.LIGHT_PURPLE}></PledgeIcon>
                  <Text
                    style={[
                      styles.labelText,
                      { paddingLeft: Scaling.scale(5) },
                    ]}>
                    1152
                  </Text>
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
            <DashedLine color={Colors.GRAY2} type="normal"></DashedLine>
            <HStack justify="space-between" style={styles.flexRow}>
              <HStack
                justify="flex-start"
                align="flex-start"
                style={styles.flexRow}>
                <Text style={styles.labelText} weight={'semibold'}>
                  {user?.user?.userName}
                </Text>
              </HStack>
              <HStack justify="space-between">
                <Text style={styles.labelText} weight={'semibold'}>
                  {user?.user?.pronounce}
                </Text>
              </HStack>
            </HStack>
            <HStack
              justify="space-between"
              align="flex-start"
              style={styles.flexRow}>
              <HStack
                justify="flex-start"
                align="flex-start"
                style={styles.flexRow}>
                <Text style={styles.labelInfo}>
                  {t('passportScreen.formfield.username')}
                </Text>
              </HStack>
              <HStack justify="space-between">
                <Text style={styles.labelInfo}>
                  {t('passportScreen.formfield.pronouns')}
                </Text>
              </HStack>
            </HStack>
          </VStack>

          <VStack style={[styles.rowInfo, styles.rowBio]}>
            <HStack
              justify="space-between"
              align="flex-start"
              style={{ height: 'auto' }}>
              <HStack
                justify="flex-start"
                align="flex-start"
                style={styles.flexRow}>
                <Text style={styles.labelText} weight={'semibold'}>
                  {user?.user?.bio}
                </Text>
                <DashedLine color={Colors.GRAY2} type="bio"></DashedLine>
              </HStack>
            </HStack>
            <HStack>
              <HStack
                justify="flex-start"
                align="baseline"
                style={styles.flexRow}>
                <Text style={styles.labelInfo}>
                  {t('passportScreen.formfield.bio')}
                </Text>
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
                style={[styles.flexRow, { width: '45%', paddingRight: '10%' }]}>
                <Text style={styles.labelText} weight={'semibold'}>
                  {user?.user?.location.locationName || 'Australia'}
                </Text>
                <DashedLine color={Colors.GRAY2} type="middle"></DashedLine>
              </HStack>
              <HStack
                justify="space-between"
                align="flex-start"
                style={[styles.flexRow, { width: '45%' }]}>
                <Text style={styles.labelText} weight={'semibold'}>
                  {formatDate(user?.user?.createdOn)}
                </Text>
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
                style={[styles.flexRow, { width: '45%', paddingRight: '10%' }]}>
                <Text style={styles.labelInfo}>
                  {t('passportScreen.formfield.location')}
                </Text>
              </HStack>
              <HStack
                justify="space-between"
                style={[styles.flexRow, { width: '45%' }]}>
                <Text style={styles.labelInfo}>
                  {t('passportScreen.formfield.dateJoined')}
                </Text>
              </HStack>
            </HStack>
          </VStack>
          <VStack
            style={[styles.rowInfo, { width: '100%' }]}
            justify="space-between"
            align="flex-start">
            <HStack style={[styles.flexRow]}>
              <Text style={styles.labelText} weight={'semibold'}>
                {user?.user?.walletAddress.substring(0, 25) + '...'}
              </Text>
            </HStack>
            <HStack style={styles.flexRow}>
              <Text style={styles.labelInfo}>
                {t('passportScreen.formfield.walletId')}
              </Text>
            </HStack>
            <DashedLine color={Colors.GRAY2} type="half"></DashedLine>
          </VStack>
          {!otherUserPassport && (
            <VStack style={[styles.rowInfo, { width: '100%' }]}>
              <Button
                type={'outline'}
                size={'full'}
                backgroundColor={Colors.WHITE}
                styleOutlineButton={{
                  borderRadius: BorderRadius.XL,
                  padding: 1,
                  backgroundColor: Colors.LIGHT_PURPLE,
                }}
                addButtonShadow={false}
                isLoading={false}
                showOutlineImageBackground={false}
                onPress={() => {
                  showEditPassport(true);
                }}>
                <Text color={Colors.LIGHT_PURPLE} weight={'bold'}>
                  {t('passportScreen.editPassport')}
                </Text>
              </Button>
            </VStack>
          )}
        </VStack>
      </View>
      {!otherUserPassport && (
        <View style={styles.ticketView}>
          <Text
            size="lg"
            color={Colors.WHITE}
            family="title"
            style={styles.headerText}>
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
          <AlphaOverlay text={'COMING SOON'}></AlphaOverlay>
        </View>
      )}
      <View style={styles.videosView}>
        <Text
          size="lg"
          family="title"
          color={Colors.LIGHT_PURPLE}
          style={styles.headerText}>
          {t('passportScreen.pozitiveVideos')}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <VStack>
            <HStack
              style={{
                paddingBottom: Scaling.scale(20),
                flex: 1,
                flexDirection: 'row',
              }}>
              {userPozzles &&
                userPozzles
                  .filter((item, index) => index <= 2)
                  .map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        launchVideosTabScreen(item);
                      }}>
                      <Hexagon
                        key={index}
                        pic={item.muxThumbnail}
                        fillColor={Colors.WHITE}
                        styleParent={{
                          margin: 0,
                          height: 120,
                          width: 120,
                          padding: 0,
                        }}></Hexagon>
                    </TouchableOpacity>
                  ))}
            </HStack>
            <HStack
              style={{ paddingBottom: 20, flex: 1, flexDirection: 'row' }}>
              {userPozzles &&
                userPozzles
                  .filter((item, index) => index >= 3 && index <= 5)
                  .map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        launchVideosTabScreen(item);
                      }}>
                      <Hexagon
                        key={index}
                        fillColor={Colors.WHITE}
                        styleParent={{
                          margin: 0,
                          padding: 0,
                          height: 120,
                          width: 120,
                        }}></Hexagon>
                    </TouchableOpacity>
                  ))}
            </HStack>
          </VStack>
        </View>
      </View>
    </>
  );
};

export default PassportData;
