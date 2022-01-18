import { CloseIcon, HStack, VStack, Text } from '$components';
import { Colors } from '$theme';

import React from 'react';
import { PropTypes } from 'prop-types';
import { Pressable, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

import styles from '../style';

const BaseToast = (props) => {
  const containerStyle = StyleSheet.flatten([styles.container, { backgroundColor: props.color }]);

  return (
    <HStack justify="space-between" style={containerStyle}>
      <HStack>
        {props.icon}
        <VStack align="flex-start">
          <Text color={Colors.DARK_PURPLE} size="sm">
            {props.text1}
          </Text>
          {props.text2 ? (
            <Text color={Colors.DARK_PURPLE} size="xs" weight="thin">
              {props.text2}
            </Text>
          ) : null}
        </VStack>
      </HStack>
      <Pressable onPress={Toast.hide}>
        <CloseIcon color={Colors.DARK_PURPLE} size="small" style={styles.icon} />
      </Pressable>
    </HStack>
  );
};

BaseToast.defaultProps = {
  color: Colors.WHITE,
  icon: null,
  text1: '',
  text2: '',
};

BaseToast.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.node,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

export default BaseToast;
