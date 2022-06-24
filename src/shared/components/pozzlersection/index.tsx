import { Colors, Padding } from '$theme';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Svg, { Text as Tx } from 'react-native-svg';
import { Hexagon, PassportView } from '$components';
import Hex from 'src/assets/icons/hex.svg';
import styles from './styles';
import { Users } from '$api';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { VIDEO_SCREEN } from '$constants';
import { toggleModal } from 'src/redux/modal/actions';
import { showPassportModal } from 'src/redux/generic/actions';

interface SectionProps {
  item: any;
}
const PozzlersSection = ({ item }: SectionProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [pozzles, setPozzles] = useState<any[]>([]);
  const avatar = require('src/assets/images/pozzlePilot.png');

  const launchVideosTabScreen = item => {
    navigation.navigate(VIDEO_SCREEN, {
      item: item,
    });

    dispatch(toggleModal());
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          launchVideosTabScreen(item);
        }}>
        <Hexagon pic={item.muxThumbnail} />
      </TouchableOpacity>
    );
  };

  const getpozzles = async () => {
    try {
      let res = await Users.getPozzles(item._id); 
      setPozzles(res.data);
    } catch (error) {}
  };

 
  const renderPassportView = () => {
    dispatch(showPassportModal(true,item.walletAddress));
  }

  useEffect(() => {
    getpozzles();
  }, []);

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <TouchableOpacity onPress={renderPassportView}>
          <Image style={styles.avatar} source={avatar} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>{item.userName}</Text>
          <View style={styles.holderView}>
            <Hex />
            <Text style={styles.poztrasluscent}>
              {pozzles.length +
                ' ' +
                t(
                  `${
                    pozzles.length > 1
                      ? 'DiscoveryScreen.pozzles'
                      : 'DiscoveryScreen.pozzle'
                  }`,
                )}
            </Text>
          </View>
        </View>
      </View>
      <ScrollView horizontal style={styles.scroll}>
        <View>
          {pozzles.length >= 1 ? (
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              horizontal
              style={[styles.inner]}
              data={pozzles}
              renderItem={renderItem}
              keyExtractor={item => item._id}
            />
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};
export default PozzlersSection;
