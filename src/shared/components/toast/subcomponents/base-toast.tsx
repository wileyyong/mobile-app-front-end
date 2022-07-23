import { CancelIcon, HStack, Text, VStack } from '$components';
import { Colors } from '$theme';

import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import ToastIcon, { IconProps } from '../toast-icon';

import styles from '../style';

interface IBaseToast {
  color: string;
  icon: IconProps;
  text1: string;
  text2: string;
}

const BaseToast = ({
  color = Colors.WHITE,
  icon,
  text1,
  text2,
}: IBaseToast) => {
  const containerStyle = StyleSheet.flatten([
    styles.container,
    { backgroundColor: color },
  ]);

  return (
    <HStack style={containerStyle}>
      <HStack>
        <ToastIcon icon={icon} />
        <VStack align="flex-start" style={styles.fill}>
          <Text
            color={Colors.DARK_PURPLE}
            size="xs"
            weight="regular"
            style={styles.text1}>
            {text1}
          </Text>
          {text2 ? (
            <Text color={Colors.DARK_PURPLE} size="xs" weight="thin">
              {text2}
            </Text>
          ) : null}
        </VStack>
      </HStack>
      <Pressable onPress={() => Toast.hide()}>
        <CancelIcon
          color={Colors.DARK_PURPLE}
          style={styles.icon}
          size={'xsmall'}
        />
      </Pressable>
    </HStack>
  );
};

export default BaseToast;
