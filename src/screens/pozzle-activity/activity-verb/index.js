import { ArrowDown, ArrowUp, Text, HStack } from '$components';
import { Colors } from '$theme';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Pressable, View, Modal, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import ScrollPicker from 'react-native-picker-scrollview';

const ActivityVerb = ({ onSelect, label, color, data }) => {
  const [showVerbsModal, setShowVerbsModal] = useState(false);

  const onSelectItem = (item) => {
    onSelect(item);
    setShowVerbsModal(false);
  };

  const renderItem = (data) => {
    console.log('data', data);
    return (
      <View>
        <Text>{data}</Text>
      </View>
    );
  };
  const renderVerbsModal = () => {
    return (
      <View style={styles.verbsView}>
        <ScrollPicker
          style={styles.verbsItem}
          dataSource={data}
          selectedIndex={0}
          itemHeight={25}
          wrapperHeight={375}
          wrapperColor={Colors.SEVENTYPERCENTBLACK}
          highlightColor={Colors.WHITE}
          renderItem={renderItem}
          onValueChange={(data, selectedIndex) => {
            //
            console.log('data, selectedIndex', data, selectedIndex);
          }}
        />
      </View>
    );
  };
  return (
    <>
      <Pressable
        onPress={() => {
          setShowVerbsModal(!showVerbsModal);
        }}
      >
        <HStack justify="space-between">
          {showVerbsModal ? (
            <ArrowUp color={color}></ArrowUp>
          ) : (
            <>
              <ArrowDown color={color}></ArrowDown>
              <Text size="sm" color={color} weight="bold">
                {label}
              </Text>
            </>
          )}
        </HStack>
      </Pressable>
      {showVerbsModal ? renderVerbsModal() : <></>}
    </>
  );
};

ActivityVerb.defaultProps = {
  onSelect: () => {},
  label: '',
  color: Colors.THIRTYPERCENTBLACK,
  data: [],
};

ActivityVerb.propTypes = {
  onSelect: PropTypes.func,
  label: PropTypes.string,
  color: PropTypes.string,
  data: PropTypes.array,
};

export default ActivityVerb;

/*

 <Modal>
        <TouchableOpacity onPress={() => setShowVerbsModal(false)}>
          <View style={styles.verbsView}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>

*/
