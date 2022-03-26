import { Image, PolygonIcon, Spacer } from '$components';
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
} from 'react-native';
import { useSelector } from 'react-redux';
import { HStack } from '../stacks';
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
  const counter = useRef(new Animated.Value(1)).current;

  const [interval, setIntervalLocal] = useState<any | undefined>(undefined);
  const [progress, setProgress] = useState(1);

  const overlay = counter.interpolate({
    extrapolate: 'clamp',
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });
  const getList = () => {
    let _uploadingList = [];
    _uploadingList.push({ key: 1, text: 'Pozzle Video', value: '1' });
    if (firstTime)
      _uploadingList.push({
        key: 2,
        text: 'First Time Joining Activity',
        value: '1',
      });
    _uploadingList.push({
      key: 3,
      text: 'Total',
      value: total.toString(),
      total: true,
    });

    return _uploadingList;
  };
  const renderItem = (item: any) => {
    return (
      <HStack justify="space-between">
        <HStack justify="flex-start">
          <Text
            style={item.item.total ? style.itemTotal : style.itemText}
            color={Colors.WHITE}>
            {item.item.text}
          </Text>
        </HStack>
        <HStack justify="flex-end">
          {item.item.total ? (
            <></>
          ) : (
            <Text style={style.itemText} color={Colors.WHITE}>
              {'+'}
            </Text>
          )}
          <Image
            style={[style.itemIcon, item.item.total ? style.itemIconTotal : '']}
            source={pozIcon}
          />
          <Text
            style={item.item.total ? style.itemTotal : style.itemText}
            color={Colors.WHITE}>
            {item.item.value}
          </Text>
        </HStack>
      </HStack>
    );
  };

  const renderList = () => {
    return <FlatList data={getList()} renderItem={renderItem} />;
  };

  const starAnimation = () => {
    console.log('starAnimation');

    Animated.timing(counter, {
      duration: 500,
      easing: Easing.linear,
      toValue: progress,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    // if (!hasAnimatioStarted) {
    //setAnimationStarted(hasAnimatioStarted);
    //starAnimation();
    //}
    if (progress >= 60) {
      // clearInterval(interval);
    } else {
      //setProgress(progress + 1);
      //starAnimation();
    }
  }, [progress]);

  return (
    <Modal
      presentationStyle={'overFullScreen'}
      transparent={true}
      animationType="slide">
      <View style={style.modalContainer}>
        <Spacer height={250}></Spacer>
        <View style={style.iconContainer}>
          <Animated.View
            style={
              (StyleSheet.absoluteFill,
              {
                backgroundColor: 'yellow',
                height: 100,
                width: overlay,
              })
            }>
            <PolygonIcon
              width={100}
              height={100}
              color={Colors.WHITE}></PolygonIcon>
            <Text color={Colors.WHITE} style={style.progress}>
              {redux.uploadProgress ? redux.uploadProgress + '%' : '0%'}
            </Text>
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
        {renderList()}
      </View>
    </Modal>
  );
};

export default Uploading;
