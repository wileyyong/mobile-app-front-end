import { Text, VStack, HStack } from '$components';

import React, { ReactNode, useCallback, useEffect, useRef } from 'react';

import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

import styles from './style';
import { getIcon } from './icons';
import { Pressable } from 'react-native';
import { Colors } from '$theme';

interface IModal {
  /* Modal content */
  children: ReactNode;
  /* Modal icon */
  icon?: string;
  /* Action to perform onClose */
  onClose: () => void;
  /* Modal show/hide trigger */
  show: boolean;
  /* Modal snap points */
  snapPoints?: string[];
  /* Modal title */
  title?: string;
  usePledgeHeader?: boolean;
}

const Modal = ({
  show,
  onClose,
  children,
  snapPoints = ['60%'],
  title,
  icon,
  usePledgeHeader,
}: IModal) => {
  const bottomSheetRef = useRef(null);

  const customHandle = useCallback(
    () =>
      usePledgeHeader ? (
        <HStack
          justify="center"
          align="flex-start"
          style={styles.headerContainer}>
          {icon && <VStack style={styles.icon}>{getIcon(icon)}</VStack>}
          <Pressable style={styles.xButtonPledge} onPressIn={() => onClose()}>
            {getIcon('closex')}
          </Pressable>
        </HStack>
      ) : (
        <HStack justify="flex-end">
          <Pressable style={styles.xButton} onPress={onClose}>
            {getIcon('close')}
          </Pressable>
        </HStack>
      ),
    [],
  );

  useEffect(() => {
    if (bottomSheetRef.current) {
      if (show) bottomSheetRef.current.snapToIndex(0);
      else bottomSheetRef.current.close();
    }
  }, [show, bottomSheetRef.current]);

  return (
    <BottomSheet
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          style={{ backgroundColor: Colors.DARK_PURPLE }}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
      style={styles.modalContainer}
      backgroundStyle={styles.modal}
      enablePanDownToClose
      handleComponent={customHandle}
      keyboardBehavior="interactive"
      index={-1}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onClose={onClose}
      android_keyboardInputMode="adjustResize">
      <VStack style={styles.container}>
        {title && (
          <Text style={styles.title} weight="bold">
            {title}
          </Text>
        )}
        {children}
      </VStack>
    </BottomSheet>
  );
};

export default Modal;
