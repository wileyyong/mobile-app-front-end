import {
  ArrowDown,
  ArrowUp,
  Text,
  HStack,
  Button,
  BlurView,
  IconButton,
  ArrowLeft,
} from '$components';
import { Colors, Padding, Scaling } from '$theme';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './style';
import stylesParent from '../style';
import ScrollPicker from 'react-native-picker-scrollview';
import { t } from 'i18next';
import { verbItem } from '../activity-selection/utils';
import { getHeight, getWidth } from 'src/shared/components/input/utils';

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

  const platformBlurType = Platform.select({
    android: 'light',
    ios: 'light',
  });
  const containerStyle = StyleSheet.flatten([
    styles.blurContainer,
    { height: getHeight('full', false), width: getWidth('full', false) },
  ]);

  const onValueChange = (data: string) => {
    setCurrentLabel(data);
  };

  const renderScrollViewWithVerbs = () => {
    return (
      <ScrollPicker
        ref={scrollPickerRef}
        dataSource={data}
        selectedIndex={getIndex()}
        itemHeight={50}
        wrapperHeight={300}
        wrapperColor={Colors.TRANSPARENT}
        highlightColor={Colors.LIGHT_PURPLE}
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
                currentLabel === item ? Colors.WHITE : Colors.FIFTYPERCENTWHITE,
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
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          height: Scaling.scale(300),
          justifyContent: 'flex-start',
          ...Padding.VERTICAL_1X,
          overflow: 'scroll',
        }}>
        {renderScrollViewWithVerbs()}
        <IconButton
          style={styles.leftArrowButton}
          onPress={onSelectItem}
          icon={<ArrowLeft color={Colors.WHITE}></ArrowLeft>}></IconButton>
      </View>
    );
  };

  useEffect(() => {
    if (label !== currentLabel) setCurrentLabel(label);
  }, [label]);

  return (
    <>
      {showVerbsModal ? (
        <HStack>{renderVerbsModal()}</HStack>
      ) : (
        <HStack style={styles.modalActivityInputs}>
          <Pressable
            style={styles.pressVerb}
            onPress={() => {
              if (!showVerbsModal) onShow();
              setShowVerbsModal(!showVerbsModal);
            }}>
            <BlurView blurType={platformBlurType} style={containerStyle}>
              <HStack style={showVerbsModal ? '' : styles.verbHStack}>
                {showVerbsModal ? (
                  <></>
                ) : (
                  <HStack justify="flex-start">
                    <Text
                      ellipsizeMode="tail"
                      numberOfLines={1}
                      style={styles.verbSelectedVerb}>
                      {label}
                    </Text>
                    <ArrowDown
                      size={'medium'}
                      style={styles.verbsArrowDown}
                      color={Colors.FIFTYPERCENTWHITE}></ArrowDown>
                  </HStack>
                )}
              </HStack>
            </BlurView>
          </Pressable>
        </HStack>
      )}
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
 <ScrollPicker
        ref={scrollPickerRef}
        dataSource={data}
        selectedIndex={getIndex()}
        itemHeight={35}
        wrapperHeight={100}
        wrapperColor={Colors.TRANSPARENT}
        highlightColor={Colors.LIGHT_PURPLE}
        renderItem={renderItem}
        onValueChange={onValueChange}
      />



      weel package

         
      <ScrollPicker
        dataSource={data}
        selectedIndex={getIndex()}
        itemHeight={35}
        wrapperHeight={100}
        wrapperColor={Colors.TRANSPARENT}
        highlightColor={Colors.LIGHT_PURPLE}
        renderItem={renderItem}
        onValueChange={onValueChange}
      />

      */
