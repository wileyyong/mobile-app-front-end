import { ArrowDown, ArrowUp, Text, HStack, Button } from '$components';
import { Colors } from '$theme';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Pressable, View, Modal, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import ScrollPicker from 'react-native-picker-scrollview';

const ActivityVerb = ({ onShow, onDismiss, onSelect, label, color, data }) => {
  const [showVerbsModal, setShowVerbsModal] = useState(false);

  const onSelectItem = () => {
    onSelect(label);
    onDismiss();
    setShowVerbsModal(false);
  };

  const renderItem = (data) => {
    return (
      <View style={styles.verbsItem}>
        <Text style={{ color: label === data ? Colors.WHITE : Colors.TWENTYPERCENTWHITE }}>
          {data}
        </Text>
      </View>
    );
  };

  const getIndex = () => {
    return data.indexOf(label);
  };
  const renderVerbsModal = () => {
    onShow();
    return (
      <HStack style={styles.verbsView}>
        <ArrowUp color={Colors.WHITE} style={styles.verbsArrow}></ArrowUp>
        <ScrollPicker
          dataSource={data}
          selectedIndex={getIndex(label)}
          itemHeight={25}
          wrapperHeight={375}
          wrapperColor={Colors.TRANSPARENT}
          highlightColor={Colors.TRANSPARENT}
          renderItem={renderItem}
          onValueChange={(data, selectedIndex) => {
            label = data;
          }}
        />
        <Button size={'small'} onPress={onSelectItem}>
          <Text>Done</Text>
        </Button>
      </HStack>
    );
  };
  return (
    <>
      <Pressable
        onPress={() => {
          setShowVerbsModal(!showVerbsModal);
        }}
      >
        <HStack style={styles.verbHStack} justify="space-between">
          {showVerbsModal ? (
            <></>
          ) : (
            <>
              <ArrowDown color={color}></ArrowDown>
              <Text style={styles.verbSelectedVerb} size="sm" color={color} weight="bold">
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
  onShow: () => {},
  onDismiss: () => {},
  label: '',
  color: Colors.THIRTYPERCENTBLACK,
  data: [],
};

ActivityVerb.propTypes = {
  onSelect: PropTypes.func,
  onShow: PropTypes.func,
  onDismiss: PropTypes.func,
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
