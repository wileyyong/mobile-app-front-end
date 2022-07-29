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
import { rewardItem } from 'src/shared/api/rewards/models';

const pozIcon = require('$assets/images/poz_token.png');

const Uploading = ({
  createActivity,
  title,
}: uploadingType) => {
  const redux = useSelector((state: any) => state.ProgressButtonRedux);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [uploadingList, setUploadingList] = useState<rewardItem[]>([]);
  const textColorInterpolation = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['#F8F8F8', '#F8F8F8'],
  });
  const textAnimatedStyle = {
    color: textColorInterpolation,
  };

  const getList = async () => {
    setUploadingList([]);
    console.log('redux.rewards',redux.rewards);
    let settingsList = redux.rewards;
    let _uploadingList: rewardItem[] = [];
    let total = 0;
    settingsList.forEach((item: rewardItem) => {
      _uploadingList.push(item);
      total += item.value;
    });
    _uploadingList.push({
      key: (_uploadingList.length + 1).toString(),
      description: t('pozzleActivityScreen.total'),
      isTotal: true,
      value: total,
      type: ''
    });
    setUploadingList(_uploadingList);
  };

  const renderItem = (item: any) => {
    const newItem : rewardItem = item.item;
    return (
      <HStack
        justify="space-between"
        style={{ marginBottom: newItem.isTotal ? 50 : 18 }}>
        <HStack justify="flex-start">
          <Text
            style={newItem.isTotal ? style.itemTotal : style.itemText}
            color={Colors.WHITE}>
            {newItem.description}
          </Text>
        </HStack>
        <HStack justify="flex-end">
          {newItem.isTotal ? (
            <></>
          ) : (
            <Text style={style.itemText} color={Colors.WHITE}>
              {'+'}
            </Text>
          )}
          <Image style={style.itemIcon} source={pozIcon} />
          <Text
            style={newItem.isTotal ? style.itemTotal : style.itemText}
            color={Colors.WHITE}>
            {newItem.value.toFixed(2)}
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
              color={Colors.TWENTYPERCENTWHITE}></PolygonIcon>

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
