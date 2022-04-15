import {
  ArrowDown,
  ArrowUp,
  Text,
  HStack,
  Button,
  BlurView,
} from '$components';
import { Colors, Scaling } from '$theme';
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
    onShow();
    return (
      <HStack
        style={{
          paddingRight: Scaling.scale(15),
        }}>
        <ArrowUp size={'medium'} color={Colors.WHITE}></ArrowUp>
        {renderScrollViewWithVerbs()}
        <Button size={'small'} onPress={onSelectItem}>
          <Text style={styles.verbBtn}>{t('pozzleActivityScreen.done')}</Text>
        </Button>
      </HStack>
    );
  };

  useEffect(() => {
    if (label !== currentLabel) setCurrentLabel(label);
  }, [label]);

  return (
    <>
      <HStack style={styles.modalActivityInputs}>
        <Pressable
          style={styles.pressVerb}
          onPress={() => {
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
