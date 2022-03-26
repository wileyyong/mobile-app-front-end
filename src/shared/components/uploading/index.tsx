import { Image, PolygonIcon, Spacer } from '$components';
import { Colors } from '$theme';
import React from 'react';
import { FlatList, View, Modal, Platform } from 'react-native';
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

  return (
    <Modal
      presentationStyle={'overFullScreen'}
      transparent={true}
      animationType="slide">
      <View style={style.modalContainer}>
        <Spacer height={250}></Spacer>
        <View style={style.iconContainer}>
          <PolygonIcon
            width={100}
            height={100}
            color={Colors.WHITE}></PolygonIcon>
          <Text color={Colors.WHITE} style={style.progress}>
            {'50%'}
          </Text>
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
