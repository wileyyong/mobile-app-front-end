import { PolygonIcon, Spacer } from '$components';
import { Colors } from '$theme';
import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  View,
  Modal,
  Platform,
  Animated,
  StyleSheet,
  Easing,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import { HStack } from '../stacks';
import { Text as RNText } from 'react-native';
import Text from '../text';
import style from './style';
import { t } from 'i18next';
import { Settings } from '$api';
import { settingsModel } from 'src/shared/api/settings/models';

const pozIcon = require('$assets/images/poz.png');

const Uploading = ({
  createActivity,
  firstTime,
  title,
  total,
}: uploadingType) => {
  const redux = useSelector((state: any) => state.ProgressButtonRedux);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [uploadingList, setUploadingList] = useState<settingsModel[]>([]);
  const textColorInterpolation = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['#FFF', '#000'],
  });
  const textAnimatedStyle = {
    color: textColorInterpolation,
  };

  const getList = async () => {
    setUploadingList([]);
    let settingsList = await Settings.get();
    let _uploadingList: settingsModel[] = [];
    let total = 0;
    settingsList.forEach((item: settingsModel) => {
      // To Do - Apply Rules
      _uploadingList.push(item);
      total += item.pozzles;
    });
    _uploadingList.push({
      key: '5',
      title: 'Total',
      isTotal: true,
      pozzles: total,
    });
    setUploadingList(_uploadingList);
  };

  const renderItem = (item: any) => {
    const newItem = item.item;
    return (
      <HStack
        justify="space-between"
        style={{ marginBottom: newItem.total ? 50 : 10 }}>
        <HStack justify="flex-start">
          <Text
            style={newItem.total ? style.itemTotal : style.itemText}
            color={Colors.WHITE}>
            {newItem.title}
          </Text>
        </HStack>
        <HStack justify="flex-end">
          {newItem.total ? (
            <></>
          ) : (
            <Text style={style.itemText} color={Colors.WHITE}>
              {'+'}
            </Text>
          )}
          <Image style={style.itemIcon} source={pozIcon} />
          <Text
            style={newItem.total ? style.itemTotal : style.itemText}
            color={Colors.WHITE}>
            {newItem.pozzles.toString()}
          </Text>
        </HStack>
      </HStack>
    );
  };

  const renderList = () => {
    return (
      <FlatList
        data={uploadingList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  const starAnimation = () => {
    // To Do - Polygon animation
    Animated.timing(animation, {
      toValue: redux.uploadProgress ? redux.uploadProgress : 100,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (uploadingList.length <= 0) getList();
    //starAnimation();
  }, [redux.uploadProgress]);

  return (
    <Modal
      presentationStyle={'overFullScreen'}
      transparent={true}
      animationType="slide">
      <View style={style.modalContainer}>
        <Spacer height={250}></Spacer>
        <View style={style.iconContainer}>
          <Animated.View
            style={{
              ...style.polygonContainer,
              maxHeight: animation,
            }}>
            <PolygonIcon
              width={100}
              height={100}
              color={Colors.WHITE}
              style={{
                position: 'absolute',
              }}></PolygonIcon>

            <Animated.Text style={{ ...style.progress, ...textAnimatedStyle }}>
              {redux.uploadProgress ? redux.uploadProgress + '%' : '0%'}
            </Animated.Text>
          </Animated.View>
        </View>
        <Spacer height={30}></Spacer>
        {createActivity ? (
          <Text color={Colors.WHITE} style={style.type}>
            {t('pozzleActivityScreen.activityHeader.createNewActivity')}
          </Text>
        ) : (
          <Text color={Colors.WHITE} style={style.type}>
            {t('pozzleActivityScreen.addPozzleVideoTo')}
          </Text>
        )}
        <Text color={Colors.WHITE} style={style.title}>
          {title}
        </Text>
        <Spacer height={30}></Spacer>
        {uploadingList.length > 0 ? renderList() : <></>}
      </View>
    </Modal>
  );
};

export default Uploading;
