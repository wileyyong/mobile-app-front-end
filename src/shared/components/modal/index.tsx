import { Text, VStack, HStack } from '$components';

import React, { ReactNode, useCallback, useEffect, useRef } from 'react';
import { Pressable } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

import styles from './style';
import { getIcon } from './icons';

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
}

const Modal = ({
  show,
  onClose,
  children,
  snapPoints = ['60%'],
  title,
  icon,
}: IModal) => {
  const bottomSheetRef = useRef(null);

  const customHandle = useCallback(
    () => (
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
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
      backgroundStyle={styles.modal}
      enablePanDownToClose
      handleComponent={customHandle}
      index={-1}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onClose={onClose}>
      <VStack style={styles.container}>
        {icon && <VStack style={styles.icon}>{getIcon(icon)}</VStack>}
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
