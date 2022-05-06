import { ArrowDown, ArrowUp, Text, HStack, Button, VStack } from '$components';
import { Colors, Scaling } from '$theme';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Pressable, View } from 'react-native';
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

  const onSelectItem = () => {
    onSelect(label);
    onDismiss();
    setShowVerbsModal(false);
  };

  const renderScrollViewWithVerbs = () => {
    return (
      <ScrollPicker
        dataSource={data}
        selectedIndex={getIndex()}
        itemHeight={25}
        wrapperHeight={375}
        wrapperColor={Colors.TRANSPARENT}
        highlightColor={Colors.TRANSPARENT}
        renderItem={renderItem}
        onValueChange={(data: string) => {
          label = data;
        }}
      />
    );
  };

  const renderItem = (data: string) => {
    return (
      <View style={styles.verbsItem}>
        <Text
          style={{
            fontSize: Scaling.scale(18),
            color: label === data ? Colors.WHITE : Colors.TWENTYPERCENTWHITE,
          }}>
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
  onSelect: () => { },
  onShow: () => { },
  onDismiss: () => { },
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
