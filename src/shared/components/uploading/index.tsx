import { Spacer } from '$components';
import React, { useState } from 'react';
import { FlatList, View, Modal } from 'react-native';
import Text from '../text';
import style from './style';

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
    _uploadingList.push({ key: 3, text: 'Total', value: total.toString() });

    return _uploadingList;
  };
  const renderItem = (item: any) => {
    console.log('item', item);
    return (
      <View>
        <Text>{item.text}</Text>
        <Text>{item.value}</Text>
      </View>
    );
  };

  const renderList = () => {
    console.log('title', title, total);
    return <FlatList data={getList()} renderItem={renderItem} />;
  };

  return (
    <Modal
      presentationStyle={'overFullScreen'}
      transparent={true}
      animationType="slide">
      <View style={style.modalContainer}>
        <Spacer height={20}></Spacer>
        {createActivity ? (
          <Text>{'Creating New Activity'}</Text>
        ) : (
          <Text>{'Adding Pozzle Video to'}</Text>
        )}
        <Text>{title}</Text>
        {renderList()}
      </View>
    </Modal>
  );
};

export default Uploading;
