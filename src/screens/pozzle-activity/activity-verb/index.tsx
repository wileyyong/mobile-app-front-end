import { ArrowDown, ArrowUp, Text, HStack, Button } from '$components';
import { Colors, Scaling } from '$theme';
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Pressable, TouchableWithoutFeedback, View } from 'react-native';
import styles from './style';
import ScrollPicker from 'react-native-picker-scrollview';
import { t } from 'i18next';
import { verbItem } from '../activity-selection/utils';

type ActivityVerbType = {
  onShow: () => void;
  onDismiss: () => void;
  onSelect: (label: string) => void;
  label: string;
  color: string;
  data: verbItem[];
};

const ActivityVerb = ({
  onShow,
  onDismiss,
  onSelect,
  label,
  color,
  data,
}: ActivityVerbType) => {
  const [showVerbsModal, setShowVerbsModal] = useState(false);
  const [currentLabel, setCurrentLabel] = useState(label);
  const scrollPickerRef = useRef();

  const onSelectItem = () => {
    setCurrentLabel(currentLabel);
    onSelect(currentLabel);
    onDismiss();
    setShowVerbsModal(false);
  };

  const onValueChange = (data: string) => {
    setCurrentLabel(data);
  };

  const renderScrollViewWithVerbs = () => {
    return (
      <ScrollPicker
        ref={scrollPickerRef}
        dataSource={data}
        selectedIndex={getIndex()}
        itemHeight={25}
        wrapperHeight={375}
        wrapperColor={Colors.TRANSPARENT}
        highlightColor={Colors.TRANSPARENT}
        renderItem={renderItem}
        onValueChange={onValueChange}
      />
    );
  };

  const renderItem = (item: string, index: number) => {
    return (
      <View style={styles.verbsItem}>
        <TouchableWithoutFeedback
          onPress={() => {
            scrollPickerRef.current.scrollToIndex(index);
            onValueChange(data[index]);
          }}>
          <Text
            style={{
              color:
                currentLabel === item
                  ? Colors.WHITE
                  : Colors.TWENTYPERCENTWHITE,
            }}>
            {item}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  const getIndex = () => {
    return data.indexOf(label);
  };

  const renderVerbsModal = () => {
    onShow();
    return (
      <HStack
        style={{
          paddingRight: Scaling.scale(15),
        }}>
        <ArrowUp size={'medium'} color={Colors.WHITE}></ArrowUp>
        {renderScrollViewWithVerbs()}
        <Button size={'small'} onPress={onSelectItem}>
          <Text style={styles.verbBtn}> {t('pozzleActivityScreen.done')}</Text>
        </Button>
      </HStack>
    );
  };

  return (
    <>
      <Pressable
        onPress={() => {
          setShowVerbsModal(!showVerbsModal);
        }}>
        <HStack
          align="flex-start"
          justify={'space-between'}
          style={showVerbsModal ? '' : styles.verbHStack}>
          {showVerbsModal ? (
            <></>
          ) : (
            <HStack
              style={{
                paddingLeft: Scaling.scale(5),
                alignSelf: 'flex-start',
              }}
              justify="flex-start">
              <ArrowDown
                size={'medium'}
                style={styles.verbsArrowDown}
                color={Colors.TWENTYPERCENTWHITE}></ArrowDown>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.verbSelectedVerb}>
                {label}
              </Text>
            </HStack>
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
