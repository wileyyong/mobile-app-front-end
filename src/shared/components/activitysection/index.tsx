import { Colors } from '$theme';
import React from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Hexagon, Spacer, WorldIcon } from '$components';
import { Hex } from 'src/assets';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { VIDEO_SCREEN } from '$constants';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'src/redux/modal/actions';

interface SectionProps {
  item: any;
  query?: boolean;
}
const Section = ({ item, query }: SectionProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const len = item.pozzles.length;
  const breakpoint = 3;

  const launchVideosTabScreen = () => {
    dispatch(toggleModal());
 
    navigation.navigate(VIDEO_SCREEN, {
      item: item,
      parent:'Discovery'
    }); 
  };

  const sliceItem = (part?: string) => {
    return part === 'first'
      ? item.pozzles.slice(0, Math.max(breakpoint, Math.ceil(len / 2)))
      : item.pozzles.slice(Math.max(breakpoint, Math.ceil(len / 2)));
  };

  const renderItemList = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          launchVideosTabScreen();
        }}>
        <Hexagon pic={item.muxThumbnail} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.holderView}>
        <Hex height={18} width={18} fill={Colors.SEVENTYPERCENTOFFWHITE} />
        <Text style={styles.poztrasluscent}>
            {`${item.pozzles.length} ${item.pozzles.length > 1 ? t('DiscoveryScreen.pozzles') : t('DiscoveryScreen.pozzle')}`}
        </Text>
        <Spacer width={5}></Spacer>
        <WorldIcon height={18} width={18} color={Colors.SEVENTYPERCENTOFFWHITE} />
        <Text style={styles.poztrasluscent}>
          {t('DiscoveryScreen.planet')}
          {item['planetId'] !== null
            ? item['planetId']
            : t('DiscoveryScreen.earth')}
        </Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.container}
        style={styles.scroll}>
        {query ? (
          <FlatList
            horizontal
            style={[styles.inner]}
            data={item.pozzles}
            renderItem={renderItemList}
            keyExtractor={item => item._id}
          />
        ) : (
          <View>
            <View style={[styles.inner]}>
              {sliceItem('first').map((pz: any, id: number) => (
                <TouchableOpacity
                  key={id}
                  onPress={() => {
                    launchVideosTabScreen();
                  }}>
                  <Hexagon key={id} pic={pz.muxThumbnail} />
                </TouchableOpacity>
              ))}
            </View>
            {len > breakpoint && query == false ? (
              <View style={[styles.inner, styles.innerext]}>
                {sliceItem().map((pz: any, id: number) => (
                  <TouchableOpacity
                    key={id}
                    onPress={() => {
                      launchVideosTabScreen();
                    }}>
                    <Hexagon key={id} pic={pz.muxThumbnail} />
                  </TouchableOpacity>
                ))}
              </View>
            ) : null}
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default Section;
