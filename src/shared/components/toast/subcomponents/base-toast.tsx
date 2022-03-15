import { CloseIcon, HStack, VStack, Text } from '$components';
import { Colors } from '$theme';

import React, { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

import styles from '../style';

interface IBaseToast {
  color: string;
  icon: ReactNode;
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
    <HStack justify="space-between" style={containerStyle}>
      <HStack>
        {icon}
        <VStack align="flex-start">
          <Text color={Colors.DARK_PURPLE} size="sm">
            {text1}
          </Text>
          {text2 ? (
            <Text color={Colors.DARK_PURPLE} size="xs" weight="thin">
              {text2}
            </Text>
          ) : null}
        </VStack>
      </HStack>
      <Pressable onPress={Toast.hide}>
        <CloseIcon
          color={Colors.DARK_PURPLE}
          size="small"
          style={styles.icon}
        />
      </Pressable>
    </HStack>
  );
};

export default BaseToast;
