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

const pozIcon = require('src/assets/images/poz.png');

const Uploading = ({
  createActivity,
  firstTime,
  title,
  total,
}: uploadingType) => {
  const redux = useSelector((state: any) => state.ProgressButtonRedux);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [uploadingList, setUploadingList] = useState<listItem[]>([]);
  const textColorInterpolation = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['#FFF', '#000'],
  });
  const textAnimatedStyle = {
    color: textColorInterpolation,
  };

  const getList = () => {
    let _uploadingList = [];
    _uploadingList.push({ key: '1', text: 'Pozzle Video', value: '1' });
    if (firstTime)
      _uploadingList.push({
        key: '2',
        text: 'First Time Joining Activity',
        value: '1',
      });
    _uploadingList.push({
      key: '3',
      text: 'Total',
      value: total.toString(),
      total: true,
    });

    console.log('_uploadingList', _uploadingList);
    setUploadingList(_uploadingList);
  };
  const renderItem = (item: any) => {
    console.log('item', item);
    const newItem = item.item;
    return (
      <HStack justify="space-between">
        <HStack justify="flex-start">
          <Text
            style={newItem.total ? style.itemTotal : style.itemText}
            color={Colors.WHITE}>
            {newItem.text}
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
            {newItem.value}
          </Text>
        </HStack>
      </HStack>
    );

    return (
      <HStack justify="space-between">
        <HStack justify="flex-start">
          <Text
            style={newItem.total ? style.itemTotal : style.itemText}
            color={Colors.WHITE}>
            {newItem.text}
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
          <Image
            style={[style.itemIcon, newItem.total ? style.itemIconTotal : '']}
            source={pozIcon}
          />
          <Text
            style={newItem.total ? style.itemTotal : style.itemText}
            color={Colors.WHITE}>
            {newItem.value}
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
    Animated.timing(animation, {
      toValue: redux.uploadProgress ? redux.uploadProgress : 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (uploadingList.length <= 0) getList();
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
            {'Creating New Activity'}
          </Text>
        ) : (
          <Text color={Colors.WHITE} style={style.type}>
            {'Adding Pozzle Video to'}
          </Text>
        )}
        <Text color={Colors.WHITE} style={style.title}>
          {title || 'Saving Water With Veggies'}
        </Text>
        <Spacer height={30}></Spacer>
        {uploadingList.length > 0 ? renderList() : <></>}
      </View>
    </Modal>
  );
};

export default Uploading;
